#!/usr/bin/env perl
use Mojolicious::Lite;
use strict;

# Documentation browser under "/perldoc"
plugin 'PODRenderer';

my @old_urls;

get '/*' => sub {
  my $self = shift;
  my $url = $self->url_for('current')->to_abs;
  push @old_urls, $url;
  if (scalar(@old_urls) > 10) {
  	shift @old_urls;
  }
  $self->stash(length => scalar(@old_urls));
  $self->stash(url => $url);
  $self->stash(old_urls => \@old_urls);
} => 'index';

app->start;
__DATA__

@@ index.html.ep
% layout 'default';
% title 'Task';
@@ layouts/default.html.ep
<!DOCTYPE html>
<html>
  <head><title><%= title %></title></head>
  <body>
  	<p>Current url is <%= $url %></p>
  	<p>array length <%= $length %></p>
  	<p>Old urls</p>
  	<ul>
	    % foreach my $url (@$old_urls) {
	    		<li><a href=<%= $url %>> <%= $url %> </a></li>
	    % }
    </ul>
  </body>
</html>
