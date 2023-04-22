import React from 'react';
import { LoaderColor } from './loader-color/LoaderColor';
import { LoaderInButtons } from './loader-in-buttons/LoaderInButtons';
import { LoaderInTabs } from './loader-in-tabs/LoaderInTabs';
import { LoaderSizes } from './loader-sizes/LoaderSizes';

export function LoaderDemo() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-12 col-xxxl-6">
        <LoaderSizes />
      </div>
      <div className="col-md-12 col-lg-12 col-xxxl-6">
        <LoaderColor />
      </div>
      <div className="col-md-12 col-lg-12 col-xxxl-6">
        <LoaderInButtons />
      </div>
      <div className="col-md-12 col-lg-12 col-xxxl-6">
        <LoaderInTabs />
      </div>
    </div>
  );
}
