import { Card, useNebularTheme } from '@nebular-react/core';
import { Editor } from '@tinymce/tinymce-react';
import React from 'react';

export function TinyMCEDemo() {
  const theme = useNebularTheme();

  return (
    <Card size="large">
      <Card.Header>Tiny MCE</Card.Header>
      <Card.Body>
        <Editor init={{ height: `calc(${theme.card_height_large} - 5.5rem)` }} />
      </Card.Body>
    </Card>
  );
}
