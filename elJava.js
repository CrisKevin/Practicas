console.log("PRACTICA N°2")
let su = document.querySelector('#sum')
let re = document.querySelector('#res')
let mu = document.querySelector('#mul')
let di = document.querySelector('#div')
let cmd = document.querySelector('#iemec')
let Suma = function sumar(){
    let v1 = Number(document.getElementById("uno").value)
    let v2 = Number(document.getElementById("dos").value)
    let res = v1 + v2
    document.getElementById("resultado").innerHTML = res
    console.log("La suma es:" + res)
}
let Resta = function sumar(){
    let v1 = Number(document.getElementById("uno").value)
    let v2 = Number(document.getElementById("dos").value)
    let res = v1 - v2
    document.getElementById("resultado").innerHTML = res
    console.log("La resta es:" + res)
}
let Multiplicacion = function sumar(){
    let v1 = Number(document.getElementById("uno").value)
    let v2 = Number(document.getElementById("dos").value)
    let res = v1 * v2
    document.getElementById("resultado").innerHTML = res
    console.log("La multiplicacion es:" + res)
}
let Division = function sumar(){
    let v1 = Number(document.getElementById("uno").value)
    let v2 = Number(document.getElementById("dos").value)
    let res = v1 / v2
    document.getElementById("resultado").innerHTML = res
    console.log("La division es:" + res)
}
let IMC = function imc(){
    if(!document.getElementById("hombre").checked && !document.getElementById("mujer").checked){
        alert("Elija un género")
    }else{
        let pes = Number(document.getElementById("pes").value)
        let alt = Number(document.getElementById("alt").value)
        let ent = pes / (alt * alt)
        let res = ent.toFixed(2)
        document.getElementById("imcr").innerHTML = res
        if(res>=30){
            document.getElementById("letra").innerHTML = 'OBESIDAD'
            console.log("Tu IMC es:" + res +". Y tu estado es: OBESIDAD")
        }
        else{
            if(res>=25){
                document.getElementById("letra").innerHTML = 'SOBRE PESO'
                console.log("Tu IMC es:" + res +". Y tu estado es: SOBRE PESO")
            }
            else{
                if(res>=18){
                    document.getElementById("letra").innerHTML = 'PESO NORMAL'
                    console.log("Tu IMC es:" + res +". Y tu estado es: PESO NORMAL")
                }
                else{
                document.getElementById("letra").innerHTML = 'BAJO PESO'
                console.log("Tu IMC es:" + res +". Y tu estado es: BAJO PESO")
                }
            }
        }
    }
}
su.addEventListener('click', Suma)
re.addEventListener('click', Resta)
mu.addEventListener('click', Multiplicacion)
di.addEventListener('click', Division)
cmd.addEventListener('click', IMC)