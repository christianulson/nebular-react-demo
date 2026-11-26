import React from 'react';
import { screen } from '@testing-library/react';
import { WorkspaceDemo } from './WorkspaceDemo';
import { renderWithTheme } from '../../../test/render';

describe('WorkspaceDemo', () => {
  it('renders every workspace section', () => {
    renderWithTheme(<WorkspaceDemo />);

    expect(screen.getByText('DockLayout')).toBeInTheDocument();
    expect(screen.getByText('Toolbar')).toBeInTheDocument();
    expect(screen.getByText('InlineEdit')).toBeInTheDocument();
    expect(screen.getByText('OverflowList')).toBeInTheDocument();
    expect(screen.getByText('OnboardingChecklist')).toBeInTheDocument();
    expect(screen.getByText('TableOfContents')).toBeInTheDocument();
    expect(screen.getByText('BulkActionBar')).toBeInTheDocument();
    expect(screen.getByText('ResponsiveFilterBar')).toBeInTheDocument();
    expect(screen.getByText('PermissionMatrix')).toBeInTheDocument();
    expect(screen.getByText('AuditTrail')).toBeInTheDocument();
    expect(screen.getByText('VersionHistory')).toBeInTheDocument();
    expect(screen.getByText('RecordPicker')).toBeInTheDocument();
  });
});
