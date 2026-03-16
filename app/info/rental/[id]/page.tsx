import {rentalCars} from '@/src/data/rental';
import RentalDetailClient from './RentalDetailClient';

export function generateStaticParams() {
    return rentalCars.map((car) => ({id: car.id}));
}

export default function RentalDetailPage({params}: {params: {id: string}}) {
    return <RentalDetailClient id={params.id}/>;
}
