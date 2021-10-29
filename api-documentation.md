---
layout: page
permalink: /api-documentation/
title: API Documentation
#description: Please select a topic below related to your inquiry. If you don’t find what you need, fill out the Intel® Smart Edge Open contact form.
---
<link rel="stylesheet" type="text/css" href="/swagger-ui/swagger-ui.css" >
<section class="inner-page-padding" id="swagger-ui">
    <!--<div class="contentArea2">
		<div class="api-col-wrap">
			<div class="api-col-left">
                <h2>
                    <a href="/api-documentation/" class="backBtn" style="font-size:16px;"><span>&#60;</span> API Documentation</a>
                </h2>
            </div>
			<div class="api-col-right">
				<select name="program" id="program" class="form-control">
					<option value="">Select API</option>
					<option <?php if(!empty($DropSelectedEaa)){ echo $DropSelectedEaa; } else{ echo ''; } ?> value='agent-auth'>Edge Application API</option>
					<option <?php if(!empty($DropSelectedController)){ echo $DropSelectedController; } else{ echo ''; } ?> value='controller'>Controller API</option>
					<option <?php if(!empty($DropSelectedAuth)){ echo $DropSelectedAuth; } else{ echo ''; } ?> value='edge-auth'>Edge Application Authentication API</option>
					<option <?php if(!empty($DropSelectedCups)){ echo $DropSelectedCups; } else{ echo ''; } ?> value='api-cups'>Core Network Configuration API</option>
					<option <?php if(!empty($DropSelectedAF)){ echo $DropSelectedAF; } else{ echo ''; } ?> value='af'>5G APPLICATION FUNCTION (AF)</option>
					<option <?php if(!empty($DropSelectedNef)){ echo $DropSelectedNef; } else{ echo ''; } ?> value='nef'>5G NETWORK EXPOSURE FUNCTION (NEF)</option>
					<option <?php if(!empty($DropSelected5goam)){ echo $DropSelected5goam; } else{ echo ''; } ?> value='5goam'>5G OAM</option>	
					<option <?php if(!empty($DropSelectedemco)){ echo $DropSelectedemco; } else{ echo ''; } ?> value='emco'>EMCO</option>
				</select>
			</div>
		</div>
		<div class="api-description"></div>
	</div>-->
    <div class="boxHead boxHeadExplore boxAPI uk-child-width-1-3@m uk-grid-match uk-text-center uk-margin-medium-top uk-grid uk-grid-stack" data-uk-grid="">
        <div class="uk-first-column">
            <div class="boxHeadBox uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight">
                <h3 class="uk-card-title">HTTP Rest</h3>
                <ul>
					{% for api_nav in site.data.api_documentation %}
                    <li class="fa-angle-right"><a href="{{ api_nav.url }}" title="{{ api_nav.title }}">{{ api_nav.title }}</a></li>
                    {% endfor %}
                </ul>
            </div>
        </div>
        <div>
            <div class="boxHeadBox uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight">
                <h3 class="uk-card-title">GRPC</h3>
                <ul>
					<li class="fa-angle-right"><a href="" title="Edge Lifecycle Management API">Edge Lifecycle Management API</a></li>
                    <li class="fa-angle-right"><a href="" title="Edge Virtualization Infrastructure API">Edge Virtualization Infrastructure API</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>

<!--Swagger Api Code Start Here  -->  
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="/swagger-ui/swagger-ui-bundle.js"> </script>
<script src="/swagger-ui/swagger-ui-standalone-preset.js"> </script>

<script type="text/javascript">
    var swag_url = "";
    var apiUrl = new URL(window.location.href);
    apiUrl = apiUrl.searchParams.get("api");

    if(apiUrl != null){
        switch(apiUrl) {
            case 'eaa':
                swag_url = 'https://raw.githubusercontent.com/open-ness/specs/master/schema/eaa/eaa.swagger.json';
            break;
            case 'controller':
                swag_url = 'https://raw.githubusercontent.com/open-ness/specs/master/schema/controller/api.swagger.json';
            break;
            case 'auth':
                swag_url = 'https://raw.githubusercontent.com/open-ness/specs/master/schema/auth/auth.swagger.json';
            break;
            case 'cups':
                swag_url = 'https://raw.githubusercontent.com/open-ness/specs/master/schema/cups/cups.swagger.json';
            break;
            case 'af':
                swag_url = 'https://raw.githubusercontent.com/open-ness/specs/master/schema/af/af.openapi.yaml';
            break;
            case 'nef':
                swag_url = 'https://raw.githubusercontent.com/open-ness/specs/master/schema/nef/nef_traffic_influence_openapi.yaml';
            break;
            case '5goam':
                swag_url = 'https://raw.githubusercontent.com/open-ness/specs/master/schema/5goam/5goam.swagger.yaml';
            break;
            case 'emco':
                swag_url = 'https://raw.githubusercontent.com/open-ness/EMCO/main/docs/emco_apis.yaml';
            break;
        }
        if(swag_url != ''){
            window.swaggerUi = SwaggerUIBundle({
                url: swag_url,
                dom_id: '#swagger-ui',
                deepLinking: true,
                validatorUrl: null,  
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIStandalonePreset
                ],
                plugins: [
                    SwaggerUIBundle.plugins.DownloadUrl
                ],
                layout: "StandaloneLayout"
            });

            //Hide Information Div
            //$(".information-container .wrapper").css("display", "none");
        }
    }
</script>
