/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        //console.log(data);
       
       // Section for Top Rated Images
       $('<div>')
            .attr('id','image-container-topRated').addClass('image-container')
            .append($('<img>').attr('id','topRated-image').attr('src','images/album/voice-in-the-night.jpg')).addClass('image')
            .prependTo('#section-top-rated');
       // Section for Top Rated Album List
        let topRated = data.discography.topRated;
        const topRatedListItems = _.map(topRated, function(recording, i){
            
            
            return $('<li>')
                .attr('index', i)
                .attr('recording-type', 'top-rated')
                .data('recording', recording)
                .addClass('recording')
                .text(recording.title)
                .click(function(){
                   $('#topRated-image').attr('src',recording.art);
                });
         });
        $('#list-top-rated').append(topRatedListItems);
        
        
        //Section  
        //let $sectionRecordings = $('<section>')
        // $('#sidebar').append($sectionRecordings);

        $('<section>')
            .attr('id','section-general-recordings')
            .append($('<h3>').attr('id','header-general-recording').text('General Recordings'))
            .append($('<ul>').attr('id','list-general-recording'))
            .appendTo('#sidebar');
    
    $('<div>')
            .attr('id','image-container-generalRecordings').addClass('image-container')
            .append($('<img>').attr('id','generalRecordings-image').attr('src','images/album/eastern-rebellion.jpg')).addClass('image')
            .prependTo('#section-general-recordings');
        
        let generalRecordings = data.discography.recordings;
        const generalRecordingListItem = _.map(generalRecordings, function(recording, i){
                
            return $('<li>')
                .attr('index', i)
                .attr('recording-type', 'general-recording')
                .data('recording', recording)
                .addClass('recording')
                .text(recording.title)
                .click(function(){
                   $('#generalRecordings-image').attr('src',recording.art);
                });
        });
        
        $('#list-general-recording').append(generalRecordingListItem);
        
        
    let billyImages = data.images.billy;
        
    let count = 0;
    
        $('#image-billy').click(function(){
            if(count < billyImages.length-1){
            count+=1;    
            $("#image-billy").attr('src', billyImages[count]);
            }
            else{
            count = 0;
            $("#image-billy").attr('src', billyImages[count]);
            }
        });
        
        
        
        
        var createTable = function(rider){
        var createRow = function(rider){
        var $row = $("<tr>");
        var $type = $("<td>").text(data.rider.type);
        var $desc = $("<td>").text(data.rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    }
    var $table = $("<table>");
    var $rows = data.map(createRow);
    $table.append($rows);
    return $table;
};
let people = [{nameFirst: "John", nameLast: "Doe"}, {nameFirst: "Dick", nameLast: "Jones"}]
createTable(people).appendTo("body");
        
        
    
       // YOUR CODE ABOVE HERe //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


