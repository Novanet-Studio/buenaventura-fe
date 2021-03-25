const query = `
{
  principal {
    content_es {
      titulo
      descripcion 
      cta {
        titulo
        link
      }
      seo {
        titulo
        descripcion
        imagen
      }
    }
    content_en {
      titulo
      descripcion
      cta {
        titulo
        link
      }
      seo {
        titulo
        descripcion
        imagen
      }
    }
  }

  nosotro {
    content_es {
      titulo
      descripcion
      subtitulo
      subtitulo_descripcion
      atributo {
        id
        titulo
        descripcion
        foto {
          titulo
          alt
          url
        }
      }
      seo {
        titulo
        descripcion
        imagen
      }
    }
    content_en {
      titulo
      descripcion
      subtitulo
      subtitulo_descripcion
      atributo {
        id
        titulo
        descripcion
        foto {
          titulo
          alt
          url
        }
      }
      seo {
        titulo
        descripcion
        imagen
      }
    }
  }
}
`

module.exports = query
