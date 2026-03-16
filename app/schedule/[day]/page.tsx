import DayDetailClient from './DayDetailClient';

export function generateStaticParams() {
    return [{day: '1'}, {day: '2'}, {day: '3'}, {day: '4'}];
}

interface Props {
    params: Promise<{ day: string }>;
}

export default async function DayDetailPage({params}: Props) {
    const {day} = await params;
    return <DayDetailClient day={day}/>;
}
