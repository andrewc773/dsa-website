$(document).ready(function() {
    $("#header").load("header.html")


    //Creating hyperlinks for all the buttons
    $("#array-btn").click(function(){
        $(location).attr('href', "arrays.html")
    })
    $("#linkedlist-btn").click(function(){
        $(location).attr('href', "linkedList.html")
    })
    $("#stack-btn").click(function(){
        $(location).attr('href', "stacks.html")
    })
    $("#queue-btn").click(function(){
        $(location).attr('href', "queues.html")
    })
    $("#htable-btn").click(function(){
        $(location).attr('href', "hashtable.html")
    })
    $("#tree-btn").click(function(){
        $(location).attr('href', "trees.html")
    })
    $("#bst-btn").click(function(){
        $(location).attr('href', "bst.html")
    })
    $("#heap-btn").click(function(){
        $(location).attr('href', "heap.html")
    })
    $("#rbtree-btn").click(function(){
        $(location).attr('href', "rbTree.html")
    })
    $("#avl-btn").click(function(){
        $(location).attr('href', "avl.html")
    })
    
});
