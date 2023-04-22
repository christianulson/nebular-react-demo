import { useForceUpdate } from '@mantine/hooks';
import { Button, Card, Icon } from '@nebular-react/core';
import React, { useEffect, useRef, useState } from 'react';
import { Timing } from '../../../../utils/timing';
import useStyles from './Player.styles';

interface PlayerProps {
  collapsed?: boolean;
}

class Track {
  name: string;
  artist: string;
  url: string;
  cover: string;
}

export function Player({ collapsed }: PlayerProps) {
  const playList: Track[] = [
    {
      name: "Don't Wanna Fight",
      artist: 'Alabama Shakes',
      url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
      cover: '/images/cover1.jpg'
    },
    {
      name: 'Harder',
      artist: 'Daft Punk',
      url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
      cover: '/images/cover2.jpg'
    },
    {
      name: 'Come Together',
      artist: 'Beatles',
      url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
      cover: '/images/cover3.jpg'
    }
  ];

  const getRandomTrack = () => {
    index.current = Math.floor(Math.random() * playList.length);
    return playList[index.current];
  };

  const player = useRef<HTMLAudioElement>(new Audio());
  const index = useRef<number>(0);
  const [track, setTrack] = useState<Track>(getRandomTrack());
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>();
  const shuffle = useRef<boolean>(false);
  const { classes, cx } = useStyles();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    player.current.onended = () => next();

    const updateCurrentTime = () => setCurrentTime(player.current.currentTime);
    player.current.addEventListener('timeupdate', updateCurrentTime);

    const updateDuration = () => setDuration(player.current.duration);
    player.current.addEventListener('loadedmetadata', updateDuration);

    return () => {
      player.current.pause();
      player.current.src = '';
      player.current.load();
      player.current.removeEventListener('timeupdate', updateCurrentTime);
      player.current.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  useEffect(() => {
    const { paused } = player.current;
    player.current.src = track.url;
    player.current.load();
    if (!paused) {
      player.current.play();
    }
  }, [track]);

  const prev = () => {
    if (!player.current.loop) {
      if (shuffle.current) {
        setTrack({ ...getRandomTrack() });
      } else {
        if (index.current === 0) {
          index.current = playList.length - 1;
        } else {
          index.current--;
        }
        setTrack({ ...playList[index.current] });
      }
    }
  };

  const next = () => {
    if (!player.current.loop) {
      if (shuffle.current) {
        setTrack({ ...getRandomTrack() });
      } else {
        if (index.current === playList.length - 1) {
          index.current = 0;
        } else {
          index.current++;
        }
        setTrack({ ...playList[index.current] });
      }
    }
  };

  const playPause = () => {
    if (player.current.paused) {
      player.current.play();
    } else {
      player.current.pause();
    }
  };

  const toggleShuffle = () => {
    shuffle.current = !shuffle.current;
  };

  const toggleLoop = () => {
    player.current.loop = !player.current.loop;
  };

  const setVolume = (volume: string) => {
    const _volume = parseInt(volume, 10);
    player.current.volume = _volume / 100;
    forceUpdate();
  };

  const getVolume = (): number => player.current.volume * 100;

  const setProgress = (progress: string) => {
    const _progress = parseInt(progress, 10);
    player.current.currentTime = (duration * _progress) / 100;
  };

  const getProgress = (): number => (currentTime / duration) * 100 || 0;

  return (
    <div className={cx(classes.root, 'player', { collapsed })}>
      <Card>
        <Card.Header className="header">My Playlist</Card.Header>

        <Card.Body className="body">
          <div className="track-info">
            <div className="cover" style={{ backgroundImage: `url(${track.cover})` }} />
            <div className="details">
              <h4 className={cx({ subtitle: collapsed })}>{track.name}</h4>
              <span>{track.artist}</span>
            </div>
          </div>

          <div className="progress-wrap">
            <input
              dir="ltr"
              type="range"
              className="progress"
              value={getProgress()}
              min={0}
              max={100}
              step={0.01}
              onChange={(event) => setProgress(event.target.value)}
            />
            <div className="progress-foreground" style={{ width: `${getProgress()}%` }} />
          </div>

          <div className="timing">
            <small className="current">{Timing(currentTime)}</small>
            <small className="remaining">{Timing(duration - currentTime)}</small>
          </div>

          <div className="controls">
            <Button
              className={cx('control-button', { on: shuffle.current })}
              appearance="ghost"
              size="tiny"
              onClick={() => toggleShuffle()}
              prefixIcon={<Icon icon="shuffle-2-outline" pack="eva" />}
            />
            <Button
              className="control-button"
              appearance="ghost"
              size="medium"
              onClick={() => prev()}
              prefixIcon={<Icon className="skip" icon="skip-back-outline" pack="eva" />}
            />
            <Button
              wrapperClassName="play-button"
              className="control-button"
              appearance="ghost"
              size="medium"
              onClick={() => playPause()}
              prefixIcon={
                <Icon
                  className="play"
                  icon={player.current.paused ? 'play-circle-outline' : 'pause-circle-outline'}
                  pack="eva"
                />
              }
            />
            <Button
              wrapperClassName="skip-forward-button"
              className="control-button"
              appearance="ghost"
              size="medium"
              onClick={() => next()}
              prefixIcon={<Icon className="skip" icon="skip-forward-outline" pack="eva" />}
            />
            <Button
              className={cx('control-button', { on: player.current.loop })}
              appearance="ghost"
              size="tiny"
              onClick={() => toggleLoop()}
              prefixIcon={<Icon icon="repeat-outline" pack="eva" />}
            />
          </div>
        </Card.Body>

        <Card.Footer className="footer">
          <div className="volume">
            <Button
              appearance="ghost"
              size="small"
              onClick={() => setVolume('0')}
              prefixIcon={<Icon className="volume-icon" icon="volume-down-outline" pack="eva" />}
            />
            <div className="progress-wrap">
              <input
                type="range"
                className="progress"
                value={getVolume()}
                min={0}
                max={100}
                onChange={(event) => setVolume(event.target.value)}
              />
              <div className="progress-foreground" style={{ width: `${getVolume()}%` }} />
            </div>
            <Button
              appearance="ghost"
              size="small"
              onClick={() => setVolume('100')}
              prefixIcon={<Icon className="volume-icon" icon="volume-up-outline" pack="eva" />}
            />
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}
