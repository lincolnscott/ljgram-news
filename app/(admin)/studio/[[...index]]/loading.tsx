'use client';

import defineConfig from '../../../../sanity.config';
import { NextStudioLoading } from 'next-sanity/studio/loading';

export default function Loading() {
  return <NextStudioLoading config={defineConfig} />;
}
