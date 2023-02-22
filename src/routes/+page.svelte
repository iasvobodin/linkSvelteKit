<main class="link">
	<h1>SvobodinaPhoto</h1>
	<div class="hedlain">
		<div class="holder">
			<div class="ava">
				<img width="200px" height="133px" src="./img/ava.jpg" alt="Аватарка" />
			</div>
		</div>
		<img width="50px" height="38px" class="logo" src="./img/logo.svg" alt="Я просто барашек" />
	</div>
	<a class="contact__link" href="https://vk.com/svobodinaphoto">Группа vk</a>
	<a class="contact__link" href="https://www.instagram.com/svobodinaphoto/">Instagram</a>
	<a class="contact__link" href="https://vk.me/aasvobodina">Написать в Vk</a>
	<a class="contact__link" href="https://t.me/svobodinaphoto">Написать в Telegram</a>
	<a class="contact__link" href="https://wa.me/%2B79514616243">Написать в WhatsApp</a>
	<a class="contact__link" href="viber://chat?number=79514616243">Написать в Viber</a>
	<a class="contact__link" href="tel:+79514616243">Позвонить</a>
	<a class="contact__link" href="./reviews">Отзывы</a>
	<a class="contact__link" href="./price">Цены</a>
</main>

<style>
	.hedlain {
		position: relative;
		display: grid;
	}
	.contact__link {
		position: relative;
		text-decoration: none;
		text-decoration-line: none;
		text-decoration-color: white;
		color: white;
		padding: 1vh;
		justify-self: center;
		font-size: max(1.2vw, 20px);
		border-radius: 5px;
		background-color: black;
		width: max(300px, 30vw);
		text-align: center;
	}

	.contact__link::before {
		content: '';
		z-index: -1;
		border-radius: 5px;
		background: linear-gradient(7deg, #ba682d, #840000 41.07%, #003c96 76.05%);
		position: absolute;
		top: -2px;
		left: -2px;
		width: calc(100% + 4px);
		height: calc(100% + 4px);
	}

	.link {
		font-family: Roboto Slab;
		display: grid;
		row-gap: 5px;
		grid-template-rows: repeat(auto-fill, 1fr);
		height: max(600px, calc(var(--vh, 1vh) * 100));
		align-content: space-evenly;
		justify-content: space-evenly;
		/*height: calc(var(--vh, 1vh) * 100); */
	}

	.logo {
		position: absolute;
		right: 20px;
		bottom: 0px;
		justify-self: center;
	}

	.holder {
		position: relative;
		justify-self: center;
		margin-bottom: 2vh;
	}

	.ava {
		border-radius: 50%;
		overflow: hidden;
		width: min(30vw, 133px);
		height: min(30vw, 133px);
	}

	.ava img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		object-position: center;
	}
	.ava::before {
		content: '';
		z-index: -1;
		border-radius: 50%;
		background: linear-gradient(7deg, #ba682d, #840000 41.07%, #003c96 76.05%);
		position: absolute;
		top: -3px;
		left: -3px;
		width: calc(100% + 6px);
		height: calc(100% + 6px);
	}
</style>
