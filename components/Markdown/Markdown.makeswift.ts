import { lazy } from 'react'

import { TextArea } from '@makeswift/runtime/controls'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  lazy(() => import('./Markdown')),
  {
    type: 'Markdown',
    label: 'Custom / Markdown',
    props: {
      children: TextArea({ label: 'Markdown', defaultValue: 'Hello, world!' }),
    },
  }
)
