# Appunti sulla progettazione - Milestone 0

- **STORE**:
	- testo della searchbar vuota collegata all'input con un v-model - myString
	- mia API completa di tutte le sue parti, compreso il testo del film presente nell'input - fullApi

- **COMPONENTI PRESENTI**:
	1. App.vue
		- dovranno esserci le chiamate API 
			- **CHIAMATA API**: nel get passiamo i parametri, che sono:
				- query - la mia richiesta, quindi associerò la mia stringa
				- api_key= ... resto della mia API
				
	1. AppHeader.vue
        - *form* che contiente: - intercettare evento 'submit.prevent'
            - searchbar
            - pulsante - al click del pulsante parte la chiamata API

	2. AppMain.vue
		- contenitore principale di tutti i film

		4. AppOneMovie.vue in Main
			- il singolo componente film

	3. AppFooter.vue
		- per adesso vuoto
