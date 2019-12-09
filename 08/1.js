const width = 25;
const height = 6;
const input = `222222222202222222221212012222202202221022222222222122220222202121002222222220202222222222222222222212222222222222022222200222222222220222222222222112222222222212222222222202122222222222222122222222222222221222222122112222222220212222222222222222222212222222221222022222220222222222222222222222222102222222222212222222220202212222222202220222222222222122220222202221122222222220212222222222222222222202222222220222222222221222222222220222222222222212222222222222222222220202102222222202220122212222222022222222212022012222222220222222222222222222222212222222221222022222222222222222221222222222222112222222222222222222221212102222212212220222212222222122222222222021002222222220202022222222222222222222222222222222122222211222202222221222222222222202222222222212222222221212112222222122222122222222222222221222202221222222222220212022222222222222222212222222222222022222212222222222221222222222222122222222222212222222220202010222202102220122212222222022222222212222002222222222202122222222222222222222222222221222022222211222222222220222222222222002222222222212222222222202000222202012221022202222222122221222222021022222222220222022222222222222222212222222220222222222222222222222220222222222222012222222222212222222222222211222202022222022222222222222221222212122112222222220222122222222222222222212222222201222122222200222202222222222222222222022222222222202222222221222102222202102222022212222222022220222222120112222222220222122222222222122222212222222212222122222200222202222222222222222222022222222222222222222220212212222202202221122202222222022221222222220212222222220222222222222222022222212222222210222122222221222202222220222222222222002222222122212222222222212210222222002222122222222222022220222212122202222222222202222222222222122222212222222210222222222211222202222222222222222222112222222022202222222221202002222222102222222202222222222221222222222202222222221212022222222222122222202222222222222022222210222202222222222222222222112222222122222222222221222212222202202221222202222222122221222212220202222222221212022222222222222222212222222201222222222210222212222221222222222222002222222022202222220222202220222202012222022202222222122220222212222002222222220212022222222222022222202222222220221122222210222212222222222222222222112222222122212222222222222002222202102222022212222222222221222202020102222222221202222222222222022222212222222220221122222202202212222222222222222222212222222222202222221220202110222222222221122212222222122221222222120122222222222212122222222222222222212222222222221122222200212202222220222222222222202222222122222222222222202112222212112221122222222222122222222222022012222222220202022222222222022222202222220220220022222212202212222222222222222222022222222122222222220222202220222122112221122212222222222221222222222112222222220202122222222222122222222222220202222022222212222212222222222222222212212222222022212222221222222011222022202220122212222222222222222212122122222222220222222222222222122222202222222200220222222222202202222221222222222212112222222222222222222220212122222002212220022202222222022220222212120112222222221202222222222222122222222222222210220022222201202212222220222222222202202222222222212222222220212010222222202222122202222222122220222202121222222222220222122222222222122222012222221220222222222211212212222220221222222222002222222022202222220220202101222212122220222212222222022221222212221202222122220202022222222222222222212222220211220222222201222202222222222222222212022222222022202222222221202110222202212222222212222222122222222202022112222122222202022222222222022222022222221221220022222221222202222220220222222212212222222022220222221222222011222002122221222212222222022220222200221202222222222212222222222222222222112222220200222022212211222202222221222222222202222222222222200222220222222121222012122220122212222222122222222200020022222222220222122222222222222222212222222212222222212210222202222221222222222202000222222222211220222222202220222122002221022202222222222220222212022002222122220222222222222222022222102222221201220122222212202202222221222222222202111222222222201221120220222200222122022220222202222222022222222222021002222022221222222222222222222222012222220210220022212210202202222220222222222222222222222222221222022220222211222122112222122222220222022220222202221222222222222222222222222222222222122222222200022022212200202222222222222222222202002222222222202222222222222021222222112222122222220222022220222200020112222222221202222222222222022222202222221202021022222200202222222121222222222222010222222022222222022221202001202212222220022022222222122221222221121202222222220222222222212222222222202222221221121022212202202212222120221222222222011222222222222220122220222001222012222220222112222222022221222211222102222022220222122222212222222222022222222200020122212202202202222121220222222222112222222222222221022222222221222112222222022022221222022221222201221102222022221222022222212222222222002222220212220122212202222210222022222222222222212222222222221221122220202001222202022220012222222222022220222201220002222022222222122222222222022222122222220222020122210211222201222221220222222212010222222022202221220220202012212212112221012202221222022220222202121122222022221202122222212222222222002222221220122022201212202222222120222222222222111222222122212221021222202110222002012220012122221222222221222201122012222222221212022222212222222222002222220220122122201210202202222021220220222222211222222022201222021222202001212102212221202212220222012221222200021122222022222212122222002222222222202222222220122022210211202222222120221220222202000222222122210220021220222220202022112220222112222222122220222201020102222222222202222222222222122222102222222210020022200210202212222121222221222212120222222222210210120220222110222102222220212222220222102220222212121222222022220212222222012222022222122222221202021122201202222200222121220221222222012222222122201202121221202222202202222221212222222222212220222220221022222120221212122222222222122222212222222212021122202222222211222121220220222202001222222122210211121220222010202202112221012222221222202222222201222222222121220212122222212222122222212222221201021122202201212222222120222221222202211222222122201221202221202121222212212221022212222222102220222200120022222221222012022222012222222222122222220212222222220212212220222221221220222212211222222122222220100220202221202102002022112102220222002220222221021122222122222112022222012222122222002222222221022122222212222211222221220221222222012222222122222211112220222212212202022222202222222222222222202222022102222122222102022222002222022222112222222222020022210222222200222221220222222222121222222122200200120222222002202102222022222222222222112222202201120112222122202122122222212222222222012222220211021222212202222202222120221202222202200222222122200202001222222001212002112122112102222222122222212220222102222220210022022222122222222222012222220222120222211201222212222122222210222202121222222022212201101220202210212122102121122102221222022222202212220002222021221022022222222222122222112222220222121122212202202210222022220212222212022222222022220212020222212020202102022021212002220222022221212210120112222220220122112222122222122222022222221212120222211212222210222021220220222222020222222222202210002220202000202202212122212122221222102221212220120122202220222122222222202222122222202222222210120122212220202212222022221210222202201222222122221221020222202120222002112220002102221221202220212220220002202121201202202222022222222222212222220122221222200221202210022120221211222222100222222222210201002221212200212002102221122002221202012220202201020022212121202122112222212222222222002222222212220022220211222220122021220202222222221222222122211221200222212112202102222120012002220212122220212200102122222121211022002222212222122222112220221102122022220202222200022120222211222212010222222222201200112220212211212222012221102022220202212222212220020202222120212002002222002220022222022220222212021022211221222200222122220210222202020222222122212210200222212022212202122022012022221222012220202201222112222120200112202222212221222222202222222002120222201210212211122020221221222222001222222022212210111222222111022222222120012202222222022222202212222022222121222222102222202222022222022222221001122222002220222221122021221201222202011222222222202221111220202211122002202021212212221222112222222202021122222220211112012222202221122222222220220002120022010202222200022121222202222212111222222022201220220222212020212202022220102222221202012221212220121222212020211122212222002222222222002220121212122222011210222200022220220210222212100222222122201201220221212100002012002122002012221211202220202201102102202122220202212222002220222222112220221220122022022222202220222120222220222222010222222222212220100222212101012222112220102002221221102222222220212222212222201212002222202221222222122221120111120022001212202200122121220211222212001222222022200222121221202000122122212221212222222210102221222200111222212021212002002222112220222222222222221101222022111222212200222120220210222212012222222022200220000222202101022102112020202122222211002220222220020202202022222102212222012221222222120222120020021122001212202222222022222222222202020222222122220222201221222201002112022022212202221222102220202201122112212122200202222222202220122222201221222110021222011220202221222022222221222202112222222122212211110220212220122202202122212222220221112220202200112102222221202222212222122221222222020021122011122122021221212211122221221200222212001222222222202221220222102110022212102122102212220210212221202221212122212022211102212222122221020222120020020222020222010210202220122022220212212222210222222222201221112221202222222102202021102002222212012221212210021012202020200022122222222221121222221022220020022022011210212220122221222202202212112222222222202222222222102201112112022221212122221210222221202211022012202021221202012222102222122222012222022111021022221211202210222220221221202202220222222022200200021221022110212112222022002222221222222222222210101122212120222002012222112222020222010221222222221222101220212220022120221221202222211222222022220211001220002111222122122021012112221220022220212201222012222122222202222222002221022222101222120112221022220211212211222020221222202221222222222222202222100220022222012012202122002202221210222222212200022102202020222012112222212222021222211221222200221122020200202210121122221200222210111222222022201210021221222222022212012122102012222210002220222211002112202021211122122222122221220222111120222001120122022201212212022221222221222221212222222222202221201220022210122222112220222102220221212221202201001102222022202002202222112220120222120020121211222022102212212221021022220202212221200221222122210200202220012121022212112022002020221200202221222200222022202021220122002222222222121222212222020210021012121201202222121222220212212222210210222022202201012220102111122102022122112022220220202222210221100012212021212122222222102220121222202221020111022112120211202221120222222210202221221110222122220210221221222020012202012021002221222200022221221220112012222121220012022222002221221222112220121022120012000222222200121022221222212200201201222122011201102220112102202112012122022112222220202220212201121202222220220002222222212122122222010122222000222222012221202222020121220210222221012000222122002120001222002102202112202221012021220222202222220212011112212021212012222222202221022222121122222012122222010212202222221220221202212212121221220122102102111221022212112212212021212210220212012220212210201012222022201212212222212222221222122021120011222002122222202211220220221200222211022202221122010021112221212102112012112222212102220200212220220201102212200122210222222222212221222222021022121111021212221211222220020020221201212202001102222222011210102221002201112112102120002112200211212221202212200022220222202012102222002120221222200021221012221222121201202220120121221212202202222220221222120122121222012222212012120020102101220221022222002211211012211021200212012222212122020222100221121200022022120202212200220121221221222200022111220022020002112222102202202022000120022222200210212221012222122122212220201102012222122221222222111221122202121122220222202202121021221222202221011110222022212202111220122220012202011122122011212201022222010210122112201022212122202222012121222222010020120220122212110220202220221222222220202202221010122122011020120220122012012102010221222121200212122221120211202222210120211102012222112220121222220222021101122022101200212211222222222220202220020002021222122112020222022010212102021020222212211222012222120201110122211021200202222222212121021222220022220211020102012220222221120120220202222201010011021122110122110222202210022222201020122021222221212222121212101022201020201012122222202021221222111122221101002122012221222211222021220200202211101002120222211211122222022022102012000122002110211210002221201201211022201020202122122222212002020222212121020222220002121200212221021122222210222201100021120222211122010220202011110112010221112120221222212222001221100202220121221002022222102012022222100220221122202022201210212200120222221210212222101200221222012021010221222202212202220222212222221221102222201212211202211020201222212222102212121222222221220121010012110222222220020122220222202222120102122022010221110222122111001102200021222211211212202212021220002022202221212222202222022120220222202020021111021112010211202210120122222201222201122202220022021120100220211220221112201020022000220221002200002200112112222121221012022222022200022222021222022000001022112202222221120022220211212220101122222122012000100220100222011212101120112212222210112220000212102102221221211112112220112210221222001202222111210022010200222221120020222220202210120111220022121100111220101002121202200122212112210211202212111220111012010022200002102221012002022222202110122001022102021210021220120022222201222220221100221022222001212222220121110112000121222120202201222000100201011222021221220112012222012002121222220212120120101022200221010001122221220201212220020102220222122102002220011001020122120020102100220220112100021201101022021121202222002220210212020222022221122100212022011221010121220220221210202212110100122222220220000222202020121202122120112122212220102111211201100112020222222202012221202222220222212212122010001102201202002010120220221210202202112012020212202221112122201122012022222121222201210221002010221210001222221020212122012222002211022202200001221100001112022201001211122020222212212220222121120102111121221120102011210202022121102201211200122112202221221222012121201212212221122011221202221101222221012020210211211122022120222210202202100110121012121012221222222001112102101021202200022210222100220222021212102120221012002221222012000222100010121122122102212221200122020022211222202220122121220102220100110122121012011202220120012220011222202110010221001112112200201122212221220200111222112101121010022112002212222120221022220210222222122000002020211200020200211120221010102002110221012122120221122011202001022222110101001001220022201110120122001020002021112122212120201011001001100010110`;

const data = input.split("").map(p => +p);

let layers = Array(data.length / (width * height)).fill([]);

layers = layers.map(l => {
  return data.splice(0, width * height);
});

const zeroesCount = layers.map(l => l.filter(p => p === 0).length);

const minZeroesIndex = zeroesCount.indexOf(Math.min(...zeroesCount));

const res =
  layers[minZeroesIndex].filter(p => p === 1).length *
  layers[minZeroesIndex].filter(p => p === 2).length;

console.log(res);
