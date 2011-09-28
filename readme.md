Instructions for Hubspot CMS
------------

1. Add a Hubspot Blog Subscription Module to the Page.
2. Get the Module ID number of the Subscription module.
  The ModuleID can be found by locating the the id in the source code.
  The ModuleID is the 6 digit code at the end of the id.
  Example:

    <div align="center" id="IngeniMailSubscribeContainer_123456" class="IngeniMailSubscribeContainer">
    
  Module ID = 123456
  
  OR
  
  In the url of the edit module link.
  right click on "edit" and click copy link location. Paste into the address bar or text editor to see the url. The ModuleID is the 6 digit code at the end.
  Example:
    javascript:%20HubSpot.CMS.ShowConfigureSideBarModule(123456,'')
  Module ID = 123456
  

Subscription module is required for slide footer.

A CTA can be added to the footer.
Create an new CTA. the CTA should be between 40px and 80px in height. The CTA can be turned into an A/B Test group to have the CTA change between pageviews.
Click the Export code button and copy only the CTA GUID. in can be found in serveral area of the code. look for this format 
hs-cta-wrapper-00000000-0000-0000-0000-000000000000
hs-cta-00000000-0000-0000-0000-000000000000
the GUID in the alpha numeric string in the format 
8 characters - 4 characters - 4 characters - 4 characters - 12 characters
GUID = 00000000-0000-0000-0000-000000000000
  
Add options to initialization Code Snippet
-------------------
    <script type="text/javascript">
        $j(document).ready(function() {
            $j.hubtoolbar({
                subscribeID : '123456', //The subscription Module ID
                portal : '63683', //Your Portal ID
                follow: false, // to show follow links, change to true
                cta : false, // to show cta, change to true, must enter GUID below
                ctaguid : '00000000-0000-0000-0000-000000000000', //GUID of CTA
                style: {
                    width: '95%', // footer width
                    height: '70px', //footer height
                    minWidth: '960px', //footer minimum width
                }
            });
        });
     </script>

Add to Page
-----------

code can be added inline by adding a html/javascript module. be sure to check the boxes to hide title and styling.

1. code can be added inline by adding a html/javascript module. be sure to check the boxes to hide title and styling. (shows on page or blog)
2. or html head section on page properties (shows on page or blog)
3. or in head section at settings>website settings (shows on entire site)

Add jQuery if not already using

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
    
Add jQuery.hubfooter.js code
can be added inline

    <script type="text/javascript">
        code goes her
    </script>
    
or external if uploaded to you files stettings>file manager

    <script type="text/javascript" src="http://yourdomain.com/Portals/PortalID/js/jquery.hubfooter.js"></script>
    
Add jQuery.hubfooter.css code
can be added inline

    <style>
    code goes her
    </style>
    
or add to your custom.css file

Add initialization script with options

    <script type="text/javascript">
        $j(document).ready(function() {
            $j.hubtoolbar({
                subscribeID : '123456', //The subscription Module ID
                portal : '63683', //Your Portal ID
                follow: false, // to show follow links, change to true
                cta : false, // to show cta, change to true, must enter GUID below
                ctaguid : '00000000-0000-0000-0000-000000000000', //GUID of CTA
                style: {
                    width: '95%', // footer width
                    height: '70px', //footer height
                    minWidth: '960px', //footer minimum width
                }
            });
        });
     </script>


