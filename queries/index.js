const query = `
{
  principal {
    content_es {
      principal {
        titulo
        descripcion
      }
      cta_titulo
      cta_vinculo
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
    content_en {
      principal {
        titulo
        descripcion
      }
      cta_titulo
      cta_vinculo
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
  }

  nosotro {
    content_es {
      principal {
        titulo
        descripcion
      }
      atributos_lista {
        id
        titulo
        descripcion
      }
      atributos_titulo
      atributos_descripcion
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
    content_en {
      principal {
        titulo
        descripcion
      }
      atributos_lista {
        id
        titulo
        descripcion
      }
      atributos_titulo
      atributos_descripcion
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
  }
  
  servicio {
    content_es {
      principal {
        titulo
        descripcion
      }
      especialidades {
        id
        nombre
      }
      lista {
        id
        especialidad
        titulo
        items
      }
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
    content_en {
      principal {
        titulo
        descripcion
      }
      especialidades {
        id
        nombre
      }
      lista {
        id
        especialidad
        titulo
        items
      }
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
  }

  serviciosAdicionale {
    content_es {
      principal {
        titulo
        descripcion
      }
      servicios {
        id
        nombre
        items
      }
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
    content_en {
      principal {
        titulo
        descripcion
      }
      servicios {
        id
        nombre
        items
      }
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
  }

  contacto {
    content_es {
      principal {
        titulo
        descripcion
      }
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
    content_en {
      principal {
        titulo
        descripcion
      }
      seo {
        titulo
        descripcion
        imagen
      }
      seo_imagen {
        titulo
        alt
      }
    }
  }
}
`

module.exports = query
