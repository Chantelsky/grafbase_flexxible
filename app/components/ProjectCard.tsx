import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type Props = {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};
const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
  return (
    <div className='flexCenter flex-col rounded-2xl drop-shadow-card'>
      <Link
        href={`/project/${id}`}
        className='flexCenter group relative w-full h-full'
      >
        <Image
          src={image}
          alt='project Image'
          width={414}
          height={314}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='hidden group-hover:flex profile_card-title'>
          <p>{title}</p>
        </div>
      </Link>
      <div className='flexBetween'></div>
    </div>
  );
};

export default ProjectCard;
