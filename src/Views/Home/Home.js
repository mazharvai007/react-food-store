import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../images/stew.jpg';
import image2 from '../../images/noodles.jpg';
import image3 from '../../images/curry.jpg';

function Home() {
	return (
		<main className='px-16 py-6 bg-gray-100 md:col-span-5'>
			<div className='flex justify-center md:justify-end'>
				<Link
					to='/'
					className='transition duration-500 ease-out md:border-2 text-primary btn border-primary hover:bg-primary hover:text-white'>
					Log in
				</Link>
				<Link
					to='/'
					className='ml-2 transition duration-500 ease-out md:border-2 border-primary text-primary btn hover:bg-primary hover:text-white'>
					Sign up
				</Link>
			</div>

			<div>
				<h2 className='text-6xl font-semibold text-gray-700'>
					Recipes
				</h2>
				<h3 className='text-2xl'>For Trencherman</h3>
			</div>

			<div>
				<h4 className='pb-2 mt-12 font-bold border-b border-gray-200'>
					Latest Recipes
				</h4>

				<div className='grid gap-10 mt-8 lg:grid-cols-3'>
					<div className='card hover:shadow-lg'>
						<img
							src={image1}
							alt='stew'
							className='object-cover w-full h-32 sm:h-48'
						/>
						<div className='m-4'>
							<span className='font-bold'>5 Bean Chili Stew</span>
							<span className='block text-sm text-gray-500'>
								Recipe by Mario
							</span>
						</div>
						<div className='badge'>
							<FontAwesomeIcon
								icon={faClock}
								className='inline-block w-5 mr-1'
							/>
							<span>25 mins</span>
						</div>
					</div>
					<div className='card hover:shadow-lg'>
						<img
							src={image2}
							alt='noodles'
							className='object-cover w-full h-32 sm:h-48'
						/>
						<div className='m-4'>
							<span className='font-bold'>
								Vegetables Noodles
							</span>
							<span className='block text-sm text-gray-500'>
								Recipe by Mario
							</span>
						</div>
						<div className='badge'>
							<FontAwesomeIcon
								icon={faClock}
								className='inline-block w-5 mr-1'
							/>
							<span>25 mins</span>
						</div>
					</div>
					<div className='card hover:shadow-lg'>
						<img
							src={image3}
							alt='noodles'
							className='object-cover w-full h-32 sm:h-48'
						/>
						<div className='m-4'>
							<span className='font-bold'>Tofu Curry</span>
							<span className='block text-sm text-gray-500'>
								Recipe by Mario
							</span>
						</div>
						<div className='badge'>
							<FontAwesomeIcon
								icon={faClock}
								className='inline-block w-5 mr-1'
							/>
							<span>25 mins</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
