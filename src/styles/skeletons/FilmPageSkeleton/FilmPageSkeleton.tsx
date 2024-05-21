import { Skeleton } from '@mui/material';
import cl from './FilmPageSkeleton.module.css';

export const FilmPageSkeleton = () => {
	return (
		<section className={cl.skeleton}>
			<div className={cl.header}>
				<Skeleton variant='rounded' width={1000} height={150} />
			</div>
			<div className={cl.wrap}>
				<div className={cl.image}>
					<Skeleton variant='rounded' width={480} height={720} />
				</div>
				<div className={cl.text}>
					<Skeleton variant='rounded' width={480} height={200} />
					<Skeleton variant='rounded' width={224} height={32} />
					<Skeleton variant='rounded' width={60} height={60} />
					<Skeleton variant='rounded' width={120} height={60} />
					<Skeleton variant='rounded' width={120} height={60} />
					<Skeleton variant='rounded' width={340} height={60} />
				</div>
			</div>
			<div className={cl.footer}>
				<Skeleton variant='rounded' width={1000} height={300} />
			</div>
		</section>
	)
}