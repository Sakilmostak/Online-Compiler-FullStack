const compiler = require('compilex');
const options = {stats: true};
compiler.init(options);

module.exports.compileCode = async function(req, res){
    try{

        compiler.flushSync();
        var inputData = req.body.inputData;
        var inputCheck= req.body.inputCheck;
        var code= req.body.code;
        var language = req.body.language;

        // if(language==='C'){
        //     var envData = {OS : "linux", cmd : "gcc"};
        //     if(inputCheck==='true'){
        //         compiler.compileCPPWithInput(
        //             envData,
        //             code,
        //             inputData,
        //             function(data){
        //                 if(data.error){
        //                     res.send(data.error);
        //                 }
        //                 else{
        //                     console.log(data.output);
        //                     res.send(data.output);
        //                 }
        //             }
        //         )
        //     }
        //     else{
        //         compiler.compileCPP(
        //             envData,
        //             code,
        //             function(data){
        //                 if(data.error){
        //                     res.send(data.error);
        //                 }
        //                 else{
        //                     console.log(data.output);
                            
        //                     res.send(data.output);
        //                 }
        //             }
        //         )
        //     }
        // }
        
        if(language==="Python"){
                var envData = {OS : "linux"};
            if(inputCheck==="true"){
                compiler.compilePythonWithInput(
                    envData,
                    code,
                    inputData,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            console.log(data.output);
                            res.send(data.output);
                        }
                    }
                )
            }
            else{
                var envData = {OS: "linux"};
                compiler.compilePython(
                    envData,
                    code,
                    function(data){
                        if(data.error){
                            res.send(data.error);
                        }
                        else{
                            console.log(data.output);
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

