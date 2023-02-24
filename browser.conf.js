const { config } = require('./wdio.conf');
const dataInp = require('./testConfig.json')

if(dataInp.browserStack)
{
config.capabilities = [
    {
        maxInstances: 5,
        //
        browserName: 'chrome',//chrome//firefox//MicrosoftEdge
        "os" : "OS X",
        "osVersion" : "Sierra",
        "browserVersion" : "103.0",
        "local" : "false",
    }
    
]
config.services = 
[
    
        ['browserstack']
    
]
}
else
if(dataInp.headless)
{
    

{
    config.capabilities = 
    [
        {
        maxInstances: 5,
        //
        browserName: 'chrome',//chrome//firefox//MicrosoftEdge
        
        acceptInsecureCerts: true,
        
        'goog:chromeOptions': 
        {
            
            args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage']
        }
        },
    ]
    config.services =
    [
        
        ['chromedriver'],
        
    ]
}
}
else
{
    {
        config.capabilities = 
        [
            {
            maxInstances: 5,
            //
            browserName: 'chrome',//chrome//firefox//MicrosoftEdge
            
            acceptInsecureCerts: true,
            
            'goog:chromeOptions': 
            {
                
                args: ['--headed', '--disable-gpu', '--disable-dev-shm-usage']
            }
            },
        ]
        config.services =
        [
            
            ['chromedriver'],
            
        ]
    }
}

exports.config = config;