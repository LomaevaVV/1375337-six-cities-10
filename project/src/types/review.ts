type ReviewAuthor = {
  avatarUrl: string
  id: number
  isPro: boolean
  name: string
}

export type Review = {
  comment: string
  date: string
  id: number
  rating: number
  user: ReviewAuthor
};

export type ReviewComment = {
  offerId: number
  comment: string
  rating: number
  resetData: () => void
};

export type Reviews = Review[];
