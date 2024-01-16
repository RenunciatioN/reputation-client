import styles from "@/styles/reputations.module.scss";

const ReputationSkeleton = () => {
	return (
		<>
			{Array.from(
				new Array(8).map((_, i) => (
					<tr key={i}>
						{Array.from(new Array(3)).map((_, i) => (
							<th key={i} className={styles.tg_cly1}>
								<div className={styles.line} />
							</th>
						))}
					</tr>
				))
			)}
		</>
	);
};

export { ReputationSkeleton };
