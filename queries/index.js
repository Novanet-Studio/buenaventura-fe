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

  servicio {
    content_es {
      id
      titulo
      descripcion
      lista {
        id
        titulo
        lista {
          id
          titulo
          contenido
        }
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
      id
      titulo
      descripcion
      lista {
        id
        titulo
        lista {
          id
          titulo
          contenido
        }
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

  especifico {
    content_es {
      titulo
      descripcion
      item_especifico {
        id
        titulo
        contenido
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
      item_especifico {
        id
        titulo
        contenido
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

  contactano {
    content_es {
      titulo
      descripcion
      foto {
        titulo
        alt
        url
      }
    }
    content_en {
      titulo
      descripcion
      foto {
        titulo
        alt
        url
      }
    }
  }
}
`

module.exports = query
