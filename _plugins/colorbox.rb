# 参考自：https://github.com/cotes2020/jekyll-theme-chirpy/discussions/1707
module Jekyll
    class ColorBoxes < Liquid::Block
      def initialize(tag_name, markup, tokens)
        super
        # Check if the markup contains a space, indicating both tag type and title
        if markup.strip.include?(" ")
          @box_type, @title = markup.strip.split(" ", 2)
          @title = @title&.gsub(/^"(.*)"$/, '\1')
        else
          # If no space, treat the markup as only tag type and set title to nil
          @box_type = markup.strip
          @title = nil
        end
      end

      def render(context)
        content = super
        # Generate HTML for the title if it exists, otherwise leave it empty
        title_html = @title ? "<div class=\"title\">#{@title}</div>" : ""
        # Render the appropriate box type with the title HTML and content
        case @box_type
        when "info"
            "<div class=\"box-info\" markdown=\"1\">#{title_html}#{content}</div>"
        when "tip"
            "<div class=\"box-tip\" markdown=\"1\">#{title_html}#{content}</div>"
        when "warning"
            "<div class=\"box-warning\" markdown=\"1\">#{title_html}#{content}</div>"
        when "danger"
            "<div class=\"box-danger\" markdown=\"1\">#{title_html}#{content}</div>"
        else
            # If the tag type is unknown, it renders without any additional styling
        end
      end
    end
  end

Liquid::Template.register_tag('box', Jekyll::ColorBoxes)
