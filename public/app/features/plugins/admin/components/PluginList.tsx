import React from 'react';
import { useLocation } from 'react-router-dom';

import { config } from '@grafana/runtime';
import { Grid } from '@grafana/ui/src/unstable';

import { CatalogPlugin, PluginListDisplayMode } from '../types';

import { PluginListItem } from './PluginListItem';

interface Props {
  plugins: CatalogPlugin[];
  displayMode: PluginListDisplayMode;
}

export const PluginList = ({ plugins, displayMode }: Props) => {
  const isList = displayMode === PluginListDisplayMode.List;
  const { pathname } = useLocation();
  const pathName = config.appSubUrl + (pathname.endsWith('/') ? pathname.slice(0, -1) : pathname);
  const gridItemsList = () => {
    const list: React.JSX.Element[] = [];
    plugins.map((plugin) => {
      list.push(<PluginListItem key={plugin.id} plugin={plugin} pathName={pathName} displayMode={displayMode} />)
    });
    return list;
  };
  return (
    <Grid display='grid' gap={3} templateColumns={isList ? '1fr' : 'repeat(auto-fill, minmax(288px, 1fr))'} data-testid="plugin-list">
      {gridItemsList()}
    </Grid>
  );
};

