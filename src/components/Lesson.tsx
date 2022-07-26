import { CheckCircle, Lock } from 'phosphor-react';

import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
	title: string;
	lessonSlug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

export function Lesson({ title, lessonSlug, availableAt, type }: LessonProps) {
	const { slug } = useParams<{ slug: string }>();

	const isLessonAvailable = isPast(availableAt);
	const availableformattedDate = format(
		availableAt,
		"EEEE' • 'd' de 'MMMM' • 'k'h'mm",
		{
			locale: ptBR,
		}
	);

	const isCurrentLesson = lessonSlug === slug;

	return (
		<Link to={`/event/lesson/${lessonSlug}`} className="group">
			<span className="text-gray-300">{availableformattedDate}</span>

			<div
				className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
					isCurrentLesson ? 'bg-green-500' : ''
				}`}
			>
				<header className="flex items-center justify-between">
					{isLessonAvailable ? (
						<span
							className={`flex items-center gap-2 text-sm font-medium ${
								isCurrentLesson ? 'text-white' : 'text-blue-500'
							}`}
						>
							<CheckCircle size={20} />
							Conteúdo liberado
						</span>
					) : (
						<span className="flex items-center gap-2 text-sm font-medium text-orange-500">
							<Lock size={20} />
							Em breve
						</span>
					)}

					<span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
						{type === 'live' ? 'AULA AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>

				<strong
					className={`${
						isCurrentLesson ? 'text-white' : 'text-gray-200'
					} mt-5 block`}
				>
					{title}
				</strong>
			</div>
		</Link>
	);
}
