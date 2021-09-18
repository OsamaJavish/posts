import {animate, style, transition, trigger} from '@angular/animations';

export const Fade = trigger(
  'inOutAnimation',
  [
    transition(
      ':enter',
      [
        style({opacity: 0}),
        animate('300ms ease-out',
          style({opacity: 1}))
      ]
    ),
    transition(
      ':leave',
      [
        style({opacity: 1}),
        animate('300ms ease-out',
          style({opacity: 0}))
      ]
    ),
  ]
);

export const FadeIn = trigger(
  'inAnimation',
  [
    transition(
      ':enter',
      [
        style({opacity: 0}),
        animate('200ms ease-out',
          style({opacity: 1}))
      ]
    ),
  ]
);
