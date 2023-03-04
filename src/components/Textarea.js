import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function Textarea() {
  return (
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Write"
      style={{ width: 800 }}
    />
  );
}