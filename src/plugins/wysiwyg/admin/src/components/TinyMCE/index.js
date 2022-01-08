import React, { useState, useRef } from "react";
import { Field, Stack, Flex, FieldLabel } from "@strapi/design-system";
// import PropTypes from "prop-types";
import "tinymce/tinymce";
import "tinymce/icons/default";
import "tinymce/themes/silver";
import "tinymce/plugins/paste";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/table";
import "tinymce/plugins/advlist";
import "tinymce/plugins/autolink";
import "tinymce/plugins/link";
import "tinymce/plugins/image";
import "tinymce/plugins/lists";
import "tinymce/plugins/charmap";
import "tinymce/plugins/hr";
import "tinymce/plugins/anchor";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/code";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/textcolor";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/media";
import "tinymce/plugins/imagetools";
import "tinymce/plugins/nonbreaking";
import "tinymce/plugins/table";
import "tinymce/plugins/template";
import "tinymce/plugins/help";
import "tinymce/skins/ui/oxide/skin.min.css";
import "tinymce/skins/ui/oxide/content.min.css";
import "tinymce/skins/content/default/content.min.css";
import styled from "styled-components";

import { useLibrary, prefixFileUrlWithBackendUrl } from "@strapi/helper-plugin";

import { Editor } from "@tinymce/tinymce-react";
const TinyEditor = ({ onChange, name, value }) => {
  const { components } = useLibrary();
  const editorRef = useRef(null);

  const [showMediaLibrary, setShowMediaLibrary] = useState(false);

  const MediaLibraryDialog = components["media-library"];

  const MediaLibraryStyled = styled(MediaLibraryDialog)`
    z-index: 4000;
  `;

  const handleToggleMediaLib = () => {
    setShowMediaLibrary(!showMediaLibrary);
  };

  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl(f.url),
      mime: f.mime,
    }));

    const imgs = formattedFiles
      .map((img) => `<img src='${img.url}' alt='${img.alt}'>`)
      .join();
    onChange({
      target: {
        name: name,
        value: value + imgs,
      },
    });
    handleToggleMediaLib();
  };

  return (
    <Field name={name}>
      <Stack size={1}>
        <Flex cols="auto auto 1fr" gap={1}>
          <FieldLabel>{name}</FieldLabel>
        </Flex>

        <Flex>
          <Editor
            value={value}
            tagName={name}
            ref={editorRef}
            onEditorChange={(editorContent) => {
              onChange({ target: { name, value: editorContent } });
            }}
            outputFormat="html"
            init={{
              width: "100%",
              branding: false,
              // skin: [DefaultContent, OxideSkin, OxideContent],
              // content_css: [DefaultContent],
              selector: "textarea",

              menubar: "edit view insert format tools table help",
              toolbar:
                "formatselect fontsizeselect | bold italic underline | alignleft aligncenter alignright | numlist bullist hr | customInsertButton imagetools code | charmap emoticons | link anchor | fullscreen",
              toolbar_sticky: true,
              toolbar_mode: "sliding",
              plugins:
                "paste searchreplace autolink code fullscreen link media imagetools template table charmap hr nonbreaking anchor insertdatetime advlist lists wordcount help charmap",
              // importcss_append: true,
              height: 600,
              image_caption: true,
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              setup: function (editor) {
                editor.ui.registry.addButton("customInsertButton", {
                  text: "Insert Image",
                  onAction: function (_) {
                    console.log("on action", _);
                    console.dir(_);
                    handleToggleMediaLib();
                  },
                });
              },
            }}
          />
        </Flex>
      </Stack>
      {showMediaLibrary && (
        <MediaLibraryStyled
          onClose={handleToggleMediaLib}
          onSelectAssets={handleSelectAssets}
        />
      )}
    </Field>
  );
};

export default TinyEditor;
