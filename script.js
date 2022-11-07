async function fetchData() {
    const response = await fetch("data.json")
    const data = await response.json();
    return data;
}
fetchData().then(data => {
    const dataDay = data.map(item => item.DateTime);
    const dataTeamFortress2 = data.map(item => item.TeamFortress2);
    const dataDota2 = data.map(item => item.Dota2);
    const dataCSGO = data.map(item => item.CSGO);
    const dataTerraria = data.map(item => item.Terraria);
    const dataGTAV = data.map(item => item.GTAV);
    const dataWallpaperEngine = data.map(item => item.WallpaperEngine);
    const dataPUBG = data.map(item => item.PUBG);
    const dataNaraka = data.map(item => item.NARAKA);
    const dataApexLegends = data.map(item => item.ApexLegends);
    const dataLostArk = data.map(item => item.LostArk);
    var ctx = document.getElementById("graphik1"); //Graph Team Fortress 2
    const graphik1 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs",
                data: dataTeamFortress2,
                borderWidth:1,
                borderColor:'#00a70e',
                backgroundColor:'#00a70e',
                options: {
                    scales: {
                        y:Chart.defaults.scales.linear.min = 0
                    },
                }
            }]
        }
    })
    var ctx = document.getElementById("graphik2"); //Dota 2
    var graphik2 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs ",
                data: dataDota2,
                borderWidth:1,
                borderColor:'#e40000',
                backgroundColor:'#e40000'
            }]
        }
    })
    var ctx = document.getElementById("graphik3"); //Counter-Strike: Global Offensive
    var graphik3 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs ",
                data: dataCSGO,
                borderWidth:1,
                borderColor:'#27387d',
                backgroundColor:'#27387d'
            }]
        }
    })
    var ctx = document.getElementById("graphik4"); //Terraria
    var graphik4 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs ",
                data: dataTerraria,
                borderWidth:1,
                borderColor:'#c6b112',
                backgroundColor:'#c6b112'
            }]
        }
    })
    var ctx = document.getElementById("graphik5"); // Grand Theft Auto V
    var graphik5 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs ",
                data: dataGTAV,
                borderWidth:1,
                borderColor:'#ff9500',
                backgroundColor:'#ff9500'
            }]
        }
    })
    var ctx = document.getElementById("graphik6"); // Wallpaper engine
    var graphik6 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs ",
                data: dataWallpaperEngine,
                borderWidth:1,
                borderColor:'#9e14b7',
                backgroundColor:'#9e14b7'
            }]
        }
    })
    var ctx = document.getElementById("graphik7"); // PUBG: Battlegrounds
    var graphik7 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs ",
                data: dataPUBG, 
                borderWidth:1,
                borderColor:'#1dcec0',
                backgroundColor:'#1dcec0'
            }]
        }
    })
    var ctx = document.getElementById("graphik8"); // Apex Legends
    var graphik8 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs ",
                data: dataApexLegends,
                borderWidth:1,
                borderColor:'#db0f9a',
                backgroundColor:'#db0f9a'
            }]
        }
    })
    var ctx = document.getElementById("graphik9"); // NARAKA: BLADEPOINT
    var graphik9 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs ",
                data: dataNaraka,
                borderWidth:1,
                borderColor:'#87c015',
                backgroundColor:'#87c015'
            }]
        }
    })
    var ctx = document.getElementById("graphik10"); // Lost Ark
    var graphik10 = new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Nb de joueurs ",
                data: dataLostArk,
                borderWidth:1,
                borderColor:'#4c9571',
                backgroundColor:'#4c9571'
            }]
        }
    })
    //test graph
    var ctx=document.getElementById("graphik11"); // Tous les jeux
    var graphik11=new Chart(ctx,{
        type:'line',
        data:{
            labels: dataDay,
            datasets:[{
                label:" Team Fortress 2 ",
                data: dataTeamFortress2,
                borderWidth:1,
                borderColor:'#2b90dd',
                backgroundColor:'#2b90dd',    
            },{
                label:" Dota 2 ",
                data: dataDota2,
                borderWidth:1,
                borderColor:'#e40000',
                backgroundColor:'#e40000'
            },{
                label:" Counter-Strike: Global Offensive ",
                data: dataCSGO,
                borderWidth:1,
                borderColor:'#27387d',
                backgroundColor:'#27387d'
            },{
                label:" Terraria ",
                data: dataTerraria,
                borderWidth:1,
                borderColor:'#c6b112',
                backgroundColor:'#c6b112'
            },{
                label:" Grand Theft Auto V ",
                data: dataGTAV,
                borderWidth:1,
                borderColor:'#ff9500',
                backgroundColor:'#ff9500'
            },{
                label:" Wallpaper Engine",
                data: dataWallpaperEngine,
                borderWidth:1,
                borderColor:'#9e14b7',
                backgroundColor:'#9e14b7'
            },{
                label:" PUBG: Battlegrounds ",
                data: dataPUBG, 
                borderWidth:1,
                borderColor:'#1dcec0',
                backgroundColor:'#1dcec0'
            },{
                label:" Apex Legends ",
                data: dataApexLegends,
                borderWidth:1,
                borderColor:'#db0f9a',
                backgroundColor:'#db0f9a'
            },{
                label:" NARAKA: BLADEPOINT ",
                data: dataNaraka,
                borderWidth:1,
                borderColor:'#87c015',
                backgroundColor:'#87c015'
            },{
                label:" Lost Ark ",
                data: dataLostArk,
                borderWidth:1,
                borderColor:'#4c9571',
                backgroundColor:'#4c9571'
            }]
        }
    })
})
