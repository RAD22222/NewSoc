
export enum Screen {
  SPLASH = 'SPLASH',
  FEED = 'FEED',
  PROFILE = 'PROFILE'
}

export interface Post {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
    location?: string;
  };
  image: string;
  likes: string;
  comments: number;
  shares: string;
  caption: string;
}

export interface Story {
  id: string;
  user: string;
  avatar: string;
  hasUnread: boolean;
}
