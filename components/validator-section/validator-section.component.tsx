// Utils
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import Image from "../image/image.component"
// import Button from "../button/button.component"
import Link from "next/link"
import Border from "../border/border.component"

// Types
import { IValidator } from "../../types/validator.types"
export interface IProps {
	data: IValidator
	enableAnimation: boolean
}

const ValidatorSection: React.FC<IProps> = ({ data, enableAnimation }) => {
	return (
		<ValidatorSectionContainer>
			<Col>
				<BlurFigure
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						duration: 1,
						delay: 0.5,
						ease: [0.5, 0, 0.56, 0.99],
					}}
					viewport={{ once: true }}
				>
					<Image
						src={data.blop.src}
						alt={data.blop.alt}
						effect="blur"
						width={"100%"}
						height={"100%"}
						style={{ objectFit: "contain" }}
					/>
				</BlurFigure>
				<IluFigure
					initial={{ opacity: 0 }}
					whileInView={
						enableAnimation
							? { opacity: [1, 1, 1], y: [0, -15, 0], scale: [1, 0.97, 1] }
							: undefined
					}
					transition={{
						duration: 4,
						repeat: Infinity,
						// ease: [0.64, 0.33, 0.64, 0.86],
					}}
				>
					<Image
						src={data.image.src}
						alt={data.image.alt}
						width={"100%"}
						height={"100%"}
						effect="blur"
						style={{ objectFit: "contain" }}
					/>
				</IluFigure>
			</Col>
			<Col>
				<Title
					initial={{ opacity: 0, y: -100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1,
						// delay: 1,
						// cubic-bezier(.5,0,.56,.99)
						ease: [0.5, 0, 0.56, 0.99],
					}}
					viewport={{ once: true }}
				>
					{data.title}
				</Title>
				<Border
					initial={{
						opacity: 0,
						// width: 0
						x: 100,
					}}
					whileInView={{
						opacity: 1,
						// width: "auto"
						x: 0,
					}}
					transition={{
						// delay: 1,
						duration: 1,
						ease: [0.5, 0, 0.56, 0.99],
					}}
					viewport={{ once: true }}
				/>
				<Description
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{
						// delay: 1.5,
						duration: 0.7,
						ease: [0.5, 0, 0.56, 0.99],
					}}
					viewport={{ once: true }}
				>
					{data.description}
				</Description>

				<ValidatorsContainer
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{
						// delay: 2.2,
						duration: 0.7,
						ease: [0.5, 0, 0.56, 0.99],
					}}
					viewport={{ once: true }}
				>
					<ValidatorsLabel
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							// delay: 2.2,
							duration: 0.7,
							ease: [0.5, 0, 0.56, 0.99],
						}}
						viewport={{ once: true }}
					>
						{data.listLabel}
					</ValidatorsLabel>
					<ValidatorsList>
						{data.validators.slice(0, 3).map((validator, index) => (
							<Validator
								key={index}
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{
									delay: 1 + index * 0.2,
									duration: 0.7,
									ease: [0.5, 0, 0.56, 0.99],
								}}
								viewport={{ once: true }}
							>
								<h3>{validator.name}</h3>
								<p>{validator.address}</p>
							</Validator>
						))}
					</ValidatorsList>
				</ValidatorsContainer>

				{/* <Button>{data.cta.label}</Button> */}
				<Link href={data.link.slug}>
					<CtaLink
						whileHover={{
							scale: 1.02,
						}}
						whileTap={{
							scale: 0.98,
						}}
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							// delay: 3.4,
							duration: 0.7,
							ease: [0.5, 0, 0.56, 0.99],
						}}
						viewport={{ once: true }}
					>
						{data.link.label}
						<IconSpan>
							<Image
								src="/assets/icons/right-arrow-pink.svg"
								alt="Right Arrow"
							/>
						</IconSpan>
					</CtaLink>
				</Link>
			</Col>
		</ValidatorSectionContainer>
	)
}

export default ValidatorSection

const ValidatorSectionContainer = styled.section`
	position: relative;
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: 1fr;
	padding: 0 2rem;
	max-width: 125rem;
	margin: 20rem auto 0;
	/* border: 1px solid blue; */
	/* justify-items: center; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		padding: 0 2rem;
		margin: 25rem auto 0;

		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			grid-template-columns: minmax(44.5rem, 1fr) 1fr;
			justify-items: unset;
			padding: 0 0;
		}
	}
`

const Col = styled.div`
	/* border: 1px solid green; */

	&:nth-child(2) {
		/* margin-top: 2rem; */
		/* justify-self: center; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			margin-left: 4rem;
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					margin-left: unset;
					/* margin-top: 6rem; */
				}
			}
		}
	}

	&:nth-child(1) {
		position: relative;
		/* justify-self: center; */
		/* align-self: center; */
		/* grid-row: 1 / 3; */

		@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
			/* margin-left: 4rem; */
			@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
				@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
					/* margin-top: 6rem; */
				}
			}
		}
	}
`

const BlurFigure = styled(motion.figure)`
	position: absolute;
	border-radius: 50%;
	width: 75rem;
	height: 75rem;
	z-index: -1;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	/* bottom: -30rem;
	left: -38rem; */

	@media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			/* bottom: unset;
			top: -24rem;
			left: -38rem; */
		}
	}
`

const IluFigure = styled(motion.figure)`
	max-width: 40rem;
	margin: 0 auto;
	width: 100%;
	max-height: 100rem;
	height: 100%;
`

const Title = styled(motion.h2)`
	font-size: 4rem;
	font-weight: 600;
	color: ${({ theme }) => theme.fonts.primary};
`

const Description = styled(motion.p)`
	max-width: 43.8rem;
	color: ${({ theme }) => theme.fonts.secondary};
`

const ValidatorsContainer = styled(motion.div)`
	margin-top: 2rem;
`

const ValidatorsLabel = styled(motion.p)`
	color: ${({ theme }) => theme.validatorSection.labelColor};
	font-size: 1.2rem;
	margin-bottom: 1rem;
`

const ValidatorsList = styled(motion.ul)`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 2rem;
`

const Validator = styled(motion.li)`
	padding: 1.5rem 2rem;
	backdrop-filter: blur(10px);
	background: ${({ theme }) => theme.validatorSection.listItemBackgroundColor};

	h3 {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.validatorSection.listItemTitleColor};
	}

	p {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.validatorSection.listItemAddressColor};
		line-break: anywhere;
	}
`

const CtaLink = styled(motion.a)`
	display: inline-flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.6rem;
	font-weight: 600;
	background: ${({ theme }) => theme.validatorSection.linkColor};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`

const IconSpan = styled.span`
	/* position: absolute;
	right: -1rem;
	top: 50%;
	transform: translateY(-50%); */

	display: flex;
	align-items: center;
	justify-content: center;
	/* opacity: 0; */
	transition: all 0.3s ease-out;

	color: ${({ theme }) => theme.colors.primary};
`
