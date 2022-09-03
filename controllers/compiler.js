var compiler = require('compilex');
var options = {stats: true};
compiler.init(options);

module.exports.compileCode = async function(req, res){
    try{

        var envData = {OS : "linux", cmd : "gcc"};
        var inputData = req.body.input;
        var inputCheck= req.body.check;
        var code= req.body.code;
        var language = req.body.language;

        if(language==='C' || language==="C++"){
            if(inputCheck){
                compiler.compileCPPWithInput(
                    envData,
                    code,
                    inputData,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            res.send(data.output);
                        }
                    }
                )
            }
            else{
                compiler.compileCPP(
                    envData,
                    code,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            res.send(data.output);
                        }
                    }
                )
            }
        }
        if(language==="Python"){
            if(inputCheck){
                var curEnv = {OS: "linux"};
                compiler.compilePythonWithInput(
                    curEnv,
                    code,
                    inputData,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            res.send(data.output);
                        }
                    }
                )
            }
            else{
                var curEnv = {OS: "linux"};
                compiler.compilePython(
                    curEnv,
                    code,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            res.send(data.output);
                        }
                    }
                )
            }
        }
    }
    catch(err){
        console.log(err);
    }
}

