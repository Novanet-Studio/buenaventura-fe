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
    }
    content_en {
      principal {
        titulo
        descripcion
      }
      cta_titulo
      cta_vinculo
    }
  }

  nosotro {
    content_es {
      principal {
        titulo
        descripcion
      }
      atributos_lista {
        titulo
        descripcion
        icono {
          url
        }
      }
      atributos_titulo
      atributos_descripcion
    }
    content_en {
      principal {
        titulo
        descripcion
      }
      atributos_lista {
        titulo
        descripcion
        icono {
          url
        }
      }
      atributos_titulo
      atributos_descripcion
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
        tipo
        titulo
        items
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
        tipo
        titulo
        items
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
    }
  }

  contacto {
    content_es {
      principal {
        titulo
        descripcion
      }
    }
    content_en {
      principal {
        titulo
        descripcion
      }
    }
  }
}
`

module.exports = query