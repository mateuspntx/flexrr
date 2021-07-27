import { useEffect, useRef, useState } from 'react';

import Tmdb from '../../services/tmdb';

import { ReviewsResponse } from '../../types/tmdb';

import { truncateText } from '../../utils/truncateText';

import DefaultUserAvatar from '../../assets/images/light_default_user-avatar.png';
import ArrowLeft from '../../assets/images/arrow_left-icon.svg';
import ArrowRight from '../../assets/images/arrow_right-icon.svg';

import * as S from './styles';
import Modal from '../Modal';

interface ReviewBoxProps {
  id: string;
  mediaType: string;
}

const ReviewBox = ({ id, mediaType }: ReviewBoxProps) => {
  const [reviewsData, setReviewsData] = useState({} as ReviewsResponse);
  const [activeReview, setActiveReview] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playPrevAnimation, setPlayPrevAnimation] = useState(false);
  const [playNextAnimation, setPlayNextAnimation] = useState(false);

  const modalContentWrapperRef = useRef() as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailsResponse = await Tmdb.getReviews(mediaType, id);

        setReviewsData(detailsResponse);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    return () => {
      setActiveReview(0);
    };
  }, [id, mediaType]);

  const previousReview = () => {
    setPlayPrevAnimation(true);

    const onAnimationEnd = () => {
      if (activeReview === 0) {
        setActiveReview(reviewsData.results!.length - 1);
      } else {
        setActiveReview(activeReview - 1);
      }

      setPlayPrevAnimation(false);
    };

    modalContentWrapperRef.current?.addEventListener('animationend', onAnimationEnd);

    return () => {
      modalContentWrapperRef.current?.removeEventListener('animationend', onAnimationEnd);
    };
  };

  const nextReview = () => {
    setPlayNextAnimation(true);

    const onAnimationEnd = () => {
      if (activeReview === reviewsData.results!.length - 1) {
        setActiveReview(0);
      } else {
        setActiveReview(activeReview + 1);
      }

      setPlayNextAnimation(false);
    };

    modalContentWrapperRef.current?.addEventListener('animationend', onAnimationEnd);

    return () => {
      modalContentWrapperRef.current?.removeEventListener('animationend', onAnimationEnd);
    };
  };

  return (
    <S.Container>
      <h1>Reviews</h1>

      {isLoading ? (
        'Loading...'
      ) : (
        <S.Wrapper>
          {reviewsData.results?.length !== 0 ? (
            <>
              <S.ContentWrapper>
                <S.Photo
                  src={
                    reviewsData.results &&
                    reviewsData.results[0].author_details.avatar_path === null
                      ? DefaultUserAvatar
                      : reviewsData.results &&
                        reviewsData.results[0].author_details.avatar_path.startsWith(
                          '/http'
                        )
                      ? DefaultUserAvatar
                      : Tmdb.image(
                          `w300/${
                            reviewsData.results &&
                            reviewsData.results[0].author_details.avatar_path
                          }`
                        )
                  }
                  loading="lazy"
                />

                <S.MiddleWrapper>
                  <S.Name>
                    {reviewsData.results &&
                      reviewsData.results[0].author_details.username}
                  </S.Name>
                  <a
                    href={reviewsData.results ? reviewsData.results[0].url : '#'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <S.Text>
                      {reviewsData.results &&
                        truncateText(reviewsData.results[0].content, 500)}
                    </S.Text>
                  </a>
                </S.MiddleWrapper>
              </S.ContentWrapper>

              <Modal
                title="Reviews"
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              >
                <S.ModalWrapper>
                  {reviewsData.results && reviewsData.total_results > 1 && (
                    <S.Button onClick={() => previousReview()}>
                      <img src={ArrowLeft} alt="Previous review" />
                    </S.Button>
                  )}

                  <S.ContentWrapper
                    playPrevAnimation={playPrevAnimation}
                    playNextAnimation={playNextAnimation}
                    ref={modalContentWrapperRef}
                  >
                    <S.Photo
                      src={
                        reviewsData.results &&
                        reviewsData.results[activeReview].author_details.avatar_path ===
                          null
                          ? DefaultUserAvatar
                          : reviewsData.results &&
                            reviewsData.results[
                              activeReview
                            ].author_details.avatar_path.startsWith('/http')
                          ? DefaultUserAvatar
                          : Tmdb.image(
                              `w300/${
                                reviewsData.results &&
                                reviewsData.results[activeReview].author_details
                                  .avatar_path
                              }`
                            )
                      }
                      loading="lazy"
                    />

                    <S.MiddleWrapper>
                      <S.Name>
                        {reviewsData.results &&
                          reviewsData.results[activeReview].author_details.username}
                      </S.Name>
                      <a
                        href={
                          reviewsData.results
                            ? reviewsData.results[activeReview].url
                            : '#'
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        <S.Text>
                          {reviewsData.results &&
                            reviewsData.results[activeReview].content}
                        </S.Text>
                      </a>
                    </S.MiddleWrapper>
                  </S.ContentWrapper>

                  {reviewsData.results && reviewsData.total_results > 1 && (
                    <S.Button onClick={() => nextReview()}>
                      <img src={ArrowRight} alt="Next review" />
                    </S.Button>
                  )}
                </S.ModalWrapper>
              </Modal>
            </>
          ) : (
            <p>We don't have any reviews at this moment</p>
          )}
        </S.Wrapper>
      )}

      {!isLoading && reviewsData.results?.length !== 0 ? (
        <S.Button onClick={() => setIsModalOpen(true)}>
          <p>More reviews</p>
          <img src={ArrowRight} alt="More reviews" />
        </S.Button>
      ) : null}
    </S.Container>
  );
};

export default ReviewBox;
