import { CheckCircle, Lock } from 'phosphor-react';

import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface LessonProps {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
	const isLessonAvailable = isPast(availableAt);
	const availableformattedDate = format(
		availableAt,
		"EEEE' • 'd' de 'MMMM' • 'k'h'mm",
		{
			locale: ptBR,
		}
	);

	return (
		<a href="#">
			<span className="text-gray-300">{availableformattedDate}</span>

			<div className="rounded border border-gray-500 p-4 mt-2">
				<header className="flex items-center justify-between">
					{isLessonAvailable ? (
						<span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
							<CheckCircle size={20} />
							Conteúdo liberado
						</span>
					) : (
						<span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
							<Lock size={20} />
							Em breve
						</span>
					)}

					<span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
						{type === 'live' ? 'AULA AO VIVO' : 'AULA PRÁTICA'}
					</span>
				</header>

				<strong className="text-gray-200 mt-5 block">{title}</strong>
			</div>
		</a>
	);
}
