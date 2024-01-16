"use client";

import { getReputationsFx } from "@/api/reputation";
import { $reputations, RepuatationGate } from "@/context/reputation";
import { useGate, useUnit } from "effector-react";
import Image from "next/image";
import { ReputationSkeleton } from "../modules/ReputationSkeleton";

import styles from "@/styles/reputations.module.scss";

const ReputationPage = () => {
	useGate(RepuatationGate);
	const reputations = useUnit($reputations);
	const spiner = useUnit(getReputationsFx.pending);

	return (
		<>
			<header className="mt-2">
				<div className="container">
					<nav className="navbar navbar-dark">
						<div className="d-flex align-items-center">
							<Image
								src={"/img/logo.png"}
								className="rounded-circle"
								alt="logo"
								style={{ marginRight: 15 }}
								width={50}
								height={50}
							/>
							<a href="" className="navbar-brand ">
								Репутация участников
							</a>
						</div>
					</nav>
				</div>
			</header>

			<main>
				<section>
					<div className="container">
						<div className={styles.reputations_table}>
							<table className="table table-striped table-dark mt-2 table-bordered">
								<thead>
									<tr>
										<th>Место</th>
										<th>Участник</th>
										<th>Репутация</th>
									</tr>
								</thead>

								<tbody>
									{spiner ? (
										<ReputationSkeleton />
									) : (
										reputations.map(
											({ reputation, fullName, userAvatar, telegramId, username }, i) => (
												<tr key={telegramId}>
													<th>{i + 1}</th>
													<td className={styles.full_name}>
														<div className={styles.full_name_inner}>
															<Image
																src={!!userAvatar ? userAvatar : "/img/avatar.png"}
																className="rounded-circle"
																alt={fullName}
																style={{ marginRight: 15 }}
																width={35}
																height={35}
															/>

															<a href={`https://t.me/${username}`} style={{color: '#fff', textDecoration: 'none'}}>{fullName}</a>
														</div>
													</td>
													<td>{reputation}</td>
												</tr>
											)
										)
									)}
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export { ReputationPage };
