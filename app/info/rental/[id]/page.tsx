import {rentalCars} from '@/src/data/rental';
import RentalDetailClient from './RentalDetailClient';

export function generateStaticParams() {
    return rentalCars.map((car) => ({id: car.id}));
}

export default async function RentalDetailPage({params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    return <RentalDetailClient id={id}/>;
}
