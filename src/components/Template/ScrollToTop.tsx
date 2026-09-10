'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Scrolls to top on route changes.
 * Uses instant scroll to override CSS smooth behavior for navigation.
 *
 * Never fires when the URL carries a hash: the target is an in-page anchor
 * (e.g. /resume#courses), and forcing the scroll to 0 would fight the
 * browser's own jump to that anchor. `isFirstRender` alone used to guard
 * this, but React Strict Mode double-invokes effects in development, and
 * the ref had already flipped by the second invocation, so the scroll ran
 * anyway and silently undid the anchor jump on every hard-loaded hash URL.
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (window.location.hash) {
      return;
    }

    // Instant scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
