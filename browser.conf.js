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
        "browserVersion" : "110.0",
        "local" : "false",
    }
    
]
config.services = 
[
    
        ['browserstack']
    
]
}
else
{
    config.capabilities = 
    [
        {
        maxInstances: 5,
        //
        browserName: 'chrome'//chrome//firefox//MicrosoftEdge
        }
    ]
    config.services =
    [
        
        ['chromedriver'],
        
    ]
}

exports.config = config;