import { Card } from '@nebular-react/core';
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Bold, ClassicEditor, Essentials, Italic, Paragraph } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import useStyles from './CKEditor.styles';

export function CKEditorDemo() {
  const { classes, cx } = useStyles();

  return (
    <Card size="large" className={cx(classes.root)}>
      <Card.Header>CKEditor</Card.Header>
      <Card.Body>
        <CKEditor
          editor={ClassicEditor}
          config={{
            licenseKey: 'GPL',
            plugins: [Essentials, Paragraph, Bold, Italic],
            toolbar: ['undo', 'redo', '|', 'bold', 'italic']
          }}
        />
      </Card.Body>
    </Card>
  );
}
