import { Card } from '@nebular-react/core';
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useStyles from './CKEditor.styles';

export function CKEditorDemo() {
  const { classes, cx } = useStyles();

  return (
    <Card size="large" className={cx(classes.root)}>
      <Card.Header>CKEditor</Card.Header>
      <Card.Body>
        <CKEditor editor={ClassicEditor} />
      </Card.Body>
    </Card>
  );
}
