import {
  Button,
  Card,
  CommandPalette,
  ConfirmDialog,
  Drawer,
  HoverCard,
  RichTextEditor
} from '@nebular-react/core';
import React, { useEffect, useState } from 'react';

export function OverlaysDemo() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState('');
  const [paletteLoading, setPaletteLoading] = useState(false);
  const [html, setHtml] = useState('<p>Hello from the new rich text editor.</p>');

  useEffect(() => {
    if (!paletteOpen || !paletteQuery.trim()) {
      setPaletteLoading(false);
      return undefined;
    }

    setPaletteLoading(true);
    const timer = window.setTimeout(() => setPaletteLoading(false), 300);
    return () => window.clearTimeout(timer);
  }, [paletteOpen, paletteQuery]);

  return (
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Drawer</Card.Header>
          <Card.Body>
            <Button onClick={() => setDrawerOpen(true)}>Open drawer</Button>
            <Drawer
              opened={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              title="Filters"
              position="right"
              size={360}
            >
              <p>Drawer content rendered through a portal.</p>
              <Button onClick={() => setDrawerOpen(false)}>Close</Button>
            </Drawer>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Confirm dialog</Card.Header>
          <Card.Body>
            <Button status="danger" onClick={() => setConfirmOpen(true)}>
              Delete item
            </Button>
            <ConfirmDialog
              opened={confirmOpen}
              title="Delete item?"
              message="This action cannot be undone."
              danger
              onCancel={() => setConfirmOpen(false)}
              onConfirm={() => setConfirmOpen(false)}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Command palette</Card.Header>
          <Card.Body>
            <Button onClick={() => setPaletteOpen(true)}>Open command palette</Button>
            <CommandPalette
              opened={paletteOpen}
              onClose={() => setPaletteOpen(false)}
              onSearch={setPaletteQuery}
              loading={paletteLoading}
              recentActions={[
                {
                  id: 'recent-profile',
                  label: 'Open profile',
                  description: 'Recently used',
                  onSelect: () => setPaletteOpen(false)
                }
              ]}
              actions={[
                {
                  id: 'profile',
                  label: 'Open profile',
                  description: 'Navigate to your profile',
                  group: 'Navigation',
                  onSelect: () => setPaletteOpen(false)
                },
                {
                  id: 'settings',
                  label: 'Open settings',
                  description: 'Manage preferences',
                  group: 'Navigation',
                  onSelect: () => setPaletteOpen(false)
                },
                {
                  id: 'theme',
                  label: 'Toggle theme',
                  group: 'Appearance',
                  onSelect: () => setPaletteOpen(false)
                }
              ]}
            />
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-4">
        <Card>
          <Card.Header>Hover card</Card.Header>
          <Card.Body>
            <HoverCard
              position="top"
              content={
                <div>
                  <strong>Han Solo</strong>
                  <div>Pilot and smuggler</div>
                </div>
              }
            >
              <Button appearance="ghost">Hover me</Button>
            </HoverCard>
          </Card.Body>
        </Card>
      </div>

      <div className="col-12">
        <Card>
          <Card.Header>Rich text editor</Card.Header>
          <Card.Body>
            <RichTextEditor value={html} onChange={setHtml} minHeight={180} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
