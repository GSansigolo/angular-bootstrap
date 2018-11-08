<template>
    <div id="header">
        <div>
            <!-- Navbar -->
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <!-- User must have been authenticated -->
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Cloud-IAS</a>

                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">

                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <a class="navbar-brand" href="#">Upload</a>
                            <form class="navbar-form navbar-left" role="search">
                                <div class="input-group">
                                    <div class="input-group-btn search-panel">
                                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                            <span id="searchCategory">Category</span> <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="#physics">Physics</a></li>
                                            <li><a href="#computerScience">Computer Science</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#all">Everything</a></li>
                                        </ul>
                                    </div>
                                    <input type="hidden" name="searchParam" value="all" id="searchParam" />
                                    <input type="text" class="form-control" name="x" placeholder="Search" />
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>
                                    </span>

                                </div>

                            </form>

                        </ul>



                    </div><!-- /.navbar-collapse -->
                </div>
        </div>
</template>

<script>
    export default {
        name: 'header'
    }
</script>

<style lang="scss">

</style>