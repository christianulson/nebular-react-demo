import {
  Button,
  Card,
  FileButton,
  FilePreview,
  ImageAnnotator,
  ImageComparison,
  LocationPicker,
  Masonry,
  MediaPlayer,
  TranscriptViewer,
  UploadQueue
} from '@nebular-react/core';
import type {
  ImageAnnotation,
  LocationCoordinates,
  TranscriptSegment,
  UploadQueueItem
} from '@nebular-react/core';
import React, { useState } from 'react';

const landscape = 'https://picsum.photos/id/1018/960/540';

const annotations: readonly ImageAnnotation[] = [
  { id: 'trail', kind: 'point', x: 0.61, y: 0.67, comment: 'Trail junction' },
  {
    id: 'ridge',
    kind: 'rectangle',
    x: 0.15,
    y: 0.1,
    width: 0.35,
    height: 0.28,
    comment: 'Western ridge'
  }
];

const segments: readonly TranscriptSegment[] = [
  { id: 'opening', start: 0, end: 2, text: 'A bee flies past the purple flower.' },
  { id: 'petals', start: 2, end: 4, text: 'The purple petals move gently.' },
  { id: 'ending', start: 4, end: 5, text: 'The scene stays focused on the flower.' }
];

const uploadItems: UploadQueueItem[] = [
  { id: 'photo', name: 'photo.png', status: 'success' },
  { id: 'report', name: 'monthly-report.pdf', status: 'uploading', progress: 42 },
  { id: 'spreadsheet', name: 'finance.xlsx', status: 'error', error: 'The connection was lost.' },
  { id: 'archive', name: 'archive.zip', status: 'queued' }
];

const masonryCards = [
  { title: 'Card one', height: 120, background: '#eef2ff' },
  { title: 'Card two', height: 180, background: '#ecfdf5' },
  { title: 'Card three', height: 90, background: '#fff7ed' },
  { title: 'Card four', height: 150, background: '#fdf2f8' },
  { title: 'Card five', height: 110, background: '#eff6ff' },
  { title: 'Card six', height: 200, background: '#f0fdf4' }
];

export function MediaDemo() {
  const [position, setPosition] = useState(65);
  const [location, setLocation] = useState<LocationCoordinates | null>({
    latitude: -23.5505,
    longitude: -46.6333
  });
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>MediaPlayer</Card.Header>
          <Card.Body>
            <MediaPlayer
              aria-label="Reference video player"
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              poster={`${landscape}?grayscale`}
              preload="none"
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>FilePreview</Card.Header>
          <Card.Body>
            <FilePreview
              file={{
                name: 'trip-notes.txt',
                mimeType: 'text/plain',
                text: 'Trail opens at sunrise.\nBring water and a map.\nThe north entrance has parking.'
              }}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>ImageComparison</Card.Header>
          <Card.Body>
            <ImageComparison
              before={{ src: `${landscape}?grayscale`, alt: 'Mountain valley in grayscale' }}
              after={{ src: landscape, alt: 'Mountain valley in color' }}
              value={position}
              onChange={setPosition}
              caption="Slide to compare the original image with the color version."
            />
            <p className="mt-2 mb-0">Original image visible: {position}%</p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>ImageAnnotator</Card.Header>
          <Card.Body>
            <ImageAnnotator
              src={landscape}
              alt="Mountain valley with a river"
              defaultValue={annotations}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>LocationPicker</Card.Header>
          <Card.Body>
            <LocationPicker value={location} onChange={setLocation} clearable />
            <p className="mt-2 mb-0">
              Coordinates: {location ? `${location.latitude}, ${location.longitude}` : 'none'}
            </p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>TranscriptViewer</Card.Header>
          <Card.Body>
            <TranscriptViewer segments={segments} searchable />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>UploadQueue</Card.Header>
          <Card.Body>
            <UploadQueue items={uploadItems} />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6">
        <Card>
          <Card.Header>FileButton</Card.Header>
          <Card.Body>
            <FileButton onChange={(files) => setFile(files?.[0] ?? null)} accept="image/*">
              <Button status="primary">Upload image</Button>
            </FileButton>
            <p className="mt-2 mb-0">{file ? `Selected: ${file.name}` : 'No file selected'}</p>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>Masonry</Card.Header>
          <Card.Body>
            <Masonry columns={3} gap={12} ariaLabel="Masonry cards">
              {masonryCards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: card.height,
                    borderRadius: '0.375rem',
                    backgroundColor: card.background,
                    fontWeight: 600
                  }}
                >
                  {card.title}
                </div>
              ))}
            </Masonry>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
