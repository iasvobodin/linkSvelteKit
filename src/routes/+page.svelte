<script>
	// Структурированные данные для SEO
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Anastasia Svobodina",
		"jobTitle": "Фотограф",
		"url": "https://svobodinaphoto.ru",
		"image": "https://link.svobodinaphoto.ru/img/ava.jpg",
		"sameAs": [
			"https://www.instagram.com/svobodinaphoto/",
			"https://vk.com/svobodinaphoto",
			"https://t.me/svobodinaphoto"
		],
		"telephone": "+7-951-461-62-43",
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+7-951-461-62-43",
			"contactType": "customer service",
			"availableLanguage": ["Russian"]
		}
	};
</script>

<svelte:head>
	<html lang="ru" />
	<meta name="author" content="Anastasia Svobodina" />
	<meta name="description" content="Профессиональный фотограф Анастасия Свободина. Свадебная, семейная и портретная фотосъемка. Контакты и портфолио." />
	<meta name="keywords" content="фотограф, свадебный фотограф, портретная съемка, Анастасия Свободина" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta property="og:title" content="Anastasia Svobodina – Профессиональный фотограф" />
	<meta property="og:type" content="website" />
	<meta name="facebook-domain-verification" content="iu0tfv17lm8mf84159lo9wmqh8p9h8" />
	<meta property="og:image" content="https://link.svobodinaphoto.ru/img/ava.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="300" />
	<meta property="og:image:height" content="300" />
	<meta property="og:url" content="https://link.svobodinaphoto.ru/" />
	<meta property="og:locale" content="ru_RU" />
	<meta property="og:description" content="Профессиональный фотограф. Свадебная, семейная и портретная фотосъемка" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="link.svobodinaphoto.ru" />
	<meta property="twitter:url" content="https://link.svobodinaphoto.ru/" />
	<meta name="twitter:title" content="Anastasia Svobodina – Профессиональный фотограф" />
	<meta name="twitter:description" content="Профессиональный фотограф. Свадебная, семейная и портретная фотосъемка" />
	<meta name="twitter:image" content="https://link.svobodinaphoto.ru/img/ava.jpg" />
	<link rel="canonical" href="https://link.svobodinaphoto.ru/" />
	<link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
	<link rel="preload" href="/img/ava.jpg" as="image" />
	<title>Anastasia Svobodina – Профессиональный фотограф | Контакты</title>
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<main class="link">
	<h1>Anastasia Svobodina</h1>
	<span class="sr-only">Профессиональный фотограф. Контакты для связи</span>
	
	<div class="hedlain">
		<div class="holder">
			<div class="ava">
				<img width="150" height="150" src="/img/ava.jpg" alt="Фотограф Анастасия Свободина" loading="eager" />
			</div>
		</div>
		<img width="60" height="45" class="logo" src="/img/logo.svg" alt="Логотип SvobodinaPhoto" loading="eager" />
	</div>
	
	<a class="contact__link" href="https://svobodinaphoto.ru" target="_blank" rel="noopener">Портфолио и сайт</a>
	<a class="contact__link" href="https://www.instagram.com/svobodinaphoto/" target="_blank" rel="noopener">Instagram</a>
	<a class="contact__link" href="https://vk.com/svobodinaphoto" target="_blank" rel="noopener">Группа ВКонтакте</a>
	<a class="contact__link" href="https://vk.me/aasvobodina" target="_blank" rel="noopener">Написать в ВК</a>
	<a class="contact__link" href="https://t.me/svobodinaphoto" target="_blank" rel="noopener">Написать в Telegram</a>
	<a class="contact__link" href="https://wa.me/79514616243" target="_blank" rel="noopener">Написать в WhatsApp</a>
	<a class="contact__link" href="viber://add?number=79514616243" target="_blank" rel="noopener">Написать в Viber</a>
	<a class="contact__link" href="tel:+79514616243">Позвонить: +7 (951) 461-62-43</a>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background: #000;
	}
	
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
	
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
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}
	
	.contact__link::before {
		content: '';
		z-index: -1;
		border-radius: 5px;
		background: linear-gradient(120deg, #57ebdb, #403ddb 41.07%, #070047 76.05%);
		position: absolute;
		top: -1.5px;
		left: -1.5px;
		width: calc(100% + 3px);
		height: calc(100% + 3px);
	}
	
	.contact__link:hover,
	.contact__link:focus {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(87, 235, 219, 0.3);
		outline: none;
	}
	
	.contact__link:focus-visible {
		outline: 2px solid #57ebdb;
		outline-offset: 2px;
	}
	
	.contact__link:active {
		transform: translateY(0);
	}
	
	.link {
		font-family: Roboto Slab, Georgia, serif;
		display: grid;
		row-gap: 5px;
		grid-template-rows: repeat(auto-fill, 1fr);
		min-height: 100vh;
		min-height: 100svh;
		align-content: space-evenly;
		justify-content: space-evenly;
		padding: 20px 10px;
	}
	
	.link h1 {
		font-size: clamp(24px, 5vw, 36px);
		font-weight: 600;
		text-align: center;
		color: white;
	}
	
	.logo {
		position: absolute;
		right: 20px;
		bottom: 0px;
		justify-self: center;
		width: clamp(40px, 8vw, 60px);
		height: auto;
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
		display: block;
	}
	
	.ava::before {
		content: '';
		z-index: -1;
		border-radius: 50%;
		background: linear-gradient(120deg, #57ebdb, #403ddb 41.07%, #070047 76.05%);
		position: absolute;
		top: -3px;
		left: -3px;
		width: calc(100% + 6px);
		height: calc(100% + 6px);
	}
	
	/* Адаптив для маленьких экранов */
	@media (max-width: 400px) {
		.link {
			gap: 8px;
			padding: 15px 10px;
		}
		
		.contact__link {
			width: calc(100vw - 40px);
			min-width: 280px;
		}
	}
	
	/* Уменьшение анимации для пользователей с prefers-reduced-motion */
	@media (prefers-reduced-motion: reduce) {
		.contact__link {
			transition: none;
		}
	}
</style>