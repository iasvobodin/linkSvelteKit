<script>
	// Структурированные данные для SEO
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Anastasia Svobodina',
		jobTitle: 'Фотограф',
		url: 'https://svobodinaphoto.ru',
		image: 'https://link.svobodinaphoto.ru/img/ava.jpg',
		sameAs: [
			'https://www.instagram.com/svobodinaphoto/',
			'https://vk.com/svobodinaphoto',
			'https://t.me/svobodinaphoto'
		],
		telephone: '+7-951-461-62-43',
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+7-951-461-62-43',
			contactType: 'customer service',
			availableLanguage: ['Russian']
		}
	};
</script>

<svelte:head>
	<meta name="author" content="Anastasia Svobodina" />
	<meta
		name="description"
		content="Профессиональный фотограф Анастасия Свободина. Свадебная, семейная и портретная фотосъемка. Контакты и портфолио."
	/>
	<meta
		name="keywords"
		content="фотограф, свадебный фотограф, портретная съемка, Анастасия Свободина"
	/>
	<meta property="og:title" content="Anastasia Svobodina – Профессиональный фотограф" />
	<meta property="og:type" content="website" />
	<meta name="facebook-domain-verification" content="iu0tfv17lm8mf84159lo9wmqh8p9h8" />
	<meta property="og:image" content="https://link.svobodinaphoto.ru/img/ava.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="300" />
	<meta property="og:image:height" content="300" />
	<meta property="og:url" content="https://link.svobodinaphoto.ru/" />
	<meta property="og:locale" content="ru_RU" />
	<meta
		property="og:description"
		content="Профессиональный фотограф. Свадебная, семейная и портретная фотосъемка"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="link.svobodinaphoto.ru" />
	<meta property="twitter:url" content="https://link.svobodinaphoto.ru/" />
	<meta name="twitter:title" content="Anastasia Svobodina – Профессиональный фотограф" />
	<meta
		name="twitter:description"
		content="Профессиональный фотограф. Свадебная, семейная и портретная фотосъемка"
	/>
	<meta name="twitter:image" content="https://link.svobodinaphoto.ru/img/ava.jpg" />
	<link rel="canonical" href="https://link.svobodinaphoto.ru/" />
	<link rel="preload" href="/img/ava2.jpg" as="image" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@400;500&display=swap"
		rel="stylesheet"
	/>

	<title>Anastasia Svobodina – Профессиональный фотограф | Контакты</title>
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}<\/script>`}
</svelte:head>

<main class="link">
	<h1>Anastasia Svobodina</h1>
	<!-- <span class="sr-only">Профессиональный фотograф. Контакты для связи</span> -->

	<div class="hedlain">
		<div class="holder">
			<div class="ava">
				<img
					width="200"
					height="133"
					src="/img/ava2.jpg"
					alt="Фотограф Анастасия Свободина"
					loading="eager"
				/>
			</div>
		</div>
		<img
			width="50"
			height="38"
			class="logo"
			src="/img/logo.svg"
			alt="Логотип SvobodinaPhoto"
			loading="eager"
		/>
	</div>

	<a
		class="contact__link"
		href="https://svobodinaphoto.ru"
		target="_blank"
		rel="noopener noreferrer">Портфолио и сайт</a
	>
	<a
		class="contact__link"
		href="https://www.instagram.com/svobodinaphoto/"
		target="_blank"
		rel="noopener noreferrer">Instagram</a
	>
	<a
		class="contact__link"
		href="https://vk.com/svobodinaphoto"
		target="_blank"
		rel="noopener noreferrer">Группа ВКонтакте</a
	>
	<a
		class="contact__link"
		href="https://vk.me/aasvobodina"
		target="_blank"
		rel="noopener noreferrer">Написать в ВК</a
	>
	<a
		class="contact__link"
		href="https://t.me/svobodinaphoto"
		target="_blank"
		rel="noopener noreferrer">Написать в Telegram</a
	>
	<a
		class="contact__link"
		href="https://wa.me/79514616243"
		target="_blank"
		rel="noopener noreferrer">Написать в WhatsApp</a
	>
	<a
		class="contact__link"
		href="viber://add?number=79514616243"
		target="_blank"
		rel="noopener noreferrer">Написать в Viber</a
	>
	<a class="contact__link" href="tel:+79514616243">Позвонить: +7 (951) 461-62-43</a>
</main>
