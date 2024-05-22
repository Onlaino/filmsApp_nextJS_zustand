import { Skeleton } from '@mui/material'
import cl from './FilmPageSkeleton.module.css'

export const FilmPageSkeleton = () => {
	return (
		<section className={cl.skeleton}>
			<div className={cl.header}>
				<Skeleton
					variant='rounded'
					width={1000}
					height={150}
					sx={{ bgcolor: 'grey.700' }}
				/>
			</div>
			<div className={cl.wrap}>
				<div className={cl.image}>
					<Skeleton
						variant='rounded'
						width={480}
						height={720}
						sx={{ bgcolor: 'grey.700' }}
					/>
				</div>
				<div className={cl.text}>
					<Skeleton
						variant='rounded'
						width={480}
						height={200}
						sx={{ bgcolor: 'grey.700' }}
					/>
					<Skeleton
						variant='rounded'
						width={224}
						height={32}
						sx={{ bgcolor: 'grey.700' }}
					/>
					<Skeleton
						variant='rounded'
						width={60}
						height={60}
						sx={{ bgcolor: 'grey.700' }}
					/>
					<Skeleton
						variant='rounded'
						width={120}
						height={60}
						sx={{ bgcolor: 'grey.700' }}
					/>
					<Skeleton
						variant='rounded'
						width={120}
						height={60}
						sx={{ bgcolor: 'grey.700' }}
					/>
					<Skeleton
						variant='rounded'
						width={340}
						height={60}
						sx={{ bgcolor: 'grey.700' }}
					/>
				</div>
			</div>
			<div className={cl.footer}>
				<Skeleton
					variant='rounded'
					width={1000}
					height={700}
					sx={{ bgcolor: 'grey.700' }}
				/>
			</div>
		</section>
	)
}
