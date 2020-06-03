<!DOCTYPE html>
<html>
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-53DG84B');</script>
<!-- End Google Tag Manager -->

	<meta name="viewport" content="width=device-width, initial-scale=1, imum-scale=1, maximum-scale=1, user-scalable=0">
	<title>prototype.js</title>
</head>

<body>
 <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53DG84B"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<p align="center"><font color = "red"><a href="prototypeJs.html">This page.</a></font></p>
<p align="center"><font color = "red"><a target="_blank" href="prototypeJs.html">Open this page in a new tab</a></font></p>

<h1>
	Google Tag Manager
</h1>

<p><a id="editThisPageLink" target="_blank" style="color:blue">Edit this page</a></p>
<script>document.getElementById('editThisPageLink').href = "https://github.com/ESW1234/esw1234.github.io/edit/master" + window.location.pathname;</script>

<style type='text/css'>
	.embeddedServiceHelpButton .helpButton .uiButton {
		background-color: #4380AE;
		font-family: "Salesforce Sans", sans-serif;
	}
	.embeddedServiceHelpButton .helpButton .uiButton:focus {
		outline: 1px solid #4380AE;
	}
	@font-face {
		font-family: 'Salesforce Sans';
		src: url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.woff') format('woff'),
		url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.ttf') format('truetype');
	}
</style>

<!-- <script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script> -->
<script type='text/javascript'>
	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Or false
 		// embedded_svc.settings.language = 'es'; //For example, enter 'en' or 'en-US'
		// embedded_svc.settings.__synchronous_decrement_tab = true;
		embedded_svc.settings.defaultMinimizedText = 'Chat With a Bot'; //(Defaults to Chat with an Expert)
		embedded_svc.settings.disabledMinimizedText = 'Offline'; //(Defaults to Agent Offline)
		//embedded_svc.settings.__synchronous_decrement_tab = true;
		//embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
		//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

		// Settings for Live Agent
		//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
			// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
			// Returns a valid button ID.
		//};
		embedded_svc.settings.prepopulatedPrechatFields = {FirstName: "justin", LastName: "mac", Email: "jmacmillin@salesforce.com", Subject: "Change my password."}; //Sets the auto-population of pre-chat form fields
		//embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
		//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';

		// Avatars
		embedded_svc.settings.avatarImgURL = "../../avatar.png";
		embedded_svc.settings.chatbotAvatarImgURL = "../../bot-avatar.png";

		// Debug
		embedded_svc.settings.devMode = true;

		if (window.$A && typeof window.$A.get === "undefined") {
			console.log("window.$A.get undefined, adding method!");
			window.$A.get = function (key) {
				console.log("window.$A.get called with key: " + key + ", returning false until Aura overrides $A.");
				return false;
			};
		}

		embedded_svc.init(
			'https://snapins.my.stmfb.stm.salesforce.com',
			'https://snapins-1600942b294.stmfb.stm.force.com/cypress071218',
			gslbBaseURL,
			'00DRM0000005jYI',
			'justinChatbot',
			{
				baseLiveAgentContentURL: 'https://c.la2-stmfb1-0-prd.stmfb.stm.salesforceliveagent.com/content',
				deploymentId: '572RM0000004DDM',
				buttonId: '573RM0000004HAw',
				baseLiveAgentURL: 'https://d.la2-stmfb1-0-prd.stmfb.stm.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04IRM00000000Z42AI_165ca0519a9',
				isOfflineSupportEnabled: false
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
// 		s.setAttribute('src', 'https://snapins.my.stmfb.stm.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.setAttribute('src', 'https://snapins.my.stmfb.stm.salesforce.com/embeddedservice/5.0/esw.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
// 		initESW('https://service.force.com');
		initESW('https://snapins.my.stmfb.stm.salesforce.com');
	}
</script>

</body>
</html>
