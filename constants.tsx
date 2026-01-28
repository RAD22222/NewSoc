
import React from 'react';
import { Post, Story } from './types';

export const MOCK_STORIES: Story[] = [
  { id: '1', user: 'luna', avatar: 'https://picsum.photos/id/64/100/100', hasUnread: false },
  { id: '2', user: 'roxy_me', avatar: 'https://picsum.photos/id/65/100/100', hasUnread: true },
  { id: '3', user: 'sam_2y', avatar: 'https://picsum.photos/id/66/100/100', hasUnread: true },
  { id: '4', user: 'tham28', avatar: 'https://picsum.photos/id/67/100/100', hasUnread: true },
  { id: '5', user: 'clayclare', avatar: 'https://picsum.photos/id/68/100/100', hasUnread: true },
  { id: '6', user: 'patyo', avatar: 'https://picsum.photos/id/69/100/100', hasUnread: true },
];

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    user: {
      name: 'Riley',
      handle: 'riley_rhythm',
      avatar: 'https://picsum.photos/id/102/100/100',
      location: 'Italy, Rome'
    },
    image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=80&w=1000',
    likes: '1.2K',
    comments: 456,
    shares: '1.6K',
    caption: 'My personal Italy 🇮🇹'
  },
  {
    id: 'p2',
    user: {
      name: 'Paolo',
      handle: 'paolo_vibes',
      avatar: 'https://picsum.photos/id/103/100/100',
      location: 'NYC'
    },
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000',
    likes: '3.4K',
    comments: 128,
    shares: '500',
    caption: 'Concrete jungle where dreams are made of.'
  }
];

export const PROFILE_DATA = {
  name: 'Luna Starling',
  handle: '@luna_star',
  avatar: 'https://picsum.photos/id/64/200/200',
  bio: 'Creative wizard at DreamWorks | Lover of digital art and immersive storytelling.',
  link: 'linkedin.com/in/lunastar98',
  followers: '12K',
  following: '156',
  postsCount: 167,
  reelsCount: 79,
  eventsCount: 38,
  taggedCount: 44,
  posts: [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800'
  ]
};
